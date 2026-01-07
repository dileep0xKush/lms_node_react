import { useEffect, useRef, useState } from 'react';
import { FiUserPlus, FiUser } from 'react-icons/fi';

import Table from '../../components/Table';
import Pagination from '../../components/Pagination';
import UserActionsDropdown from '../../components/UserActionsDropdown';
import UserFormModal, { type UserForm } from './UserFormModal';
import { getUsersApi, type ApiUser } from '../../services/userService';
import { useToast } from '../../components/toast/useToast';
import { usePagination } from '../../hooks/usePagination';
import PageSizeSelect from '../../components/PageSizeSelect';

type User = UserForm & {
  _id: string;
  status: string;
  role: string;
};

type SortOrder = 'asc' | 'desc';

export default function Users() {
  const { showToast } = useToast();

  const [openModal, setOpenModal] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [sortBy, setSortBy] = useState<'name' | 'email' | 'role' | 'isActive' | 'createdAt'>('createdAt');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');
  const [search, setSearch] = useState('');

  const abortRef = useRef<AbortController | null>(null);

  const { page, pageSize, totalPages, setPage, setPageSize, setTotal } = usePagination();

  const fetchUsers = async () => {
    try {
      setLoading(true);
      abortRef.current?.abort();
      abortRef.current = new AbortController();

      const res = await getUsersApi({
        page,
        limit: pageSize,
        sortBy,
        sortOrder,
        isActive: true,
        search,
      });

      const list = (res?.data?.users ?? []) as ApiUser[];
      const mapped: User[] = list.map((u: ApiUser) => ({
        _id: u._id,
        name: u.name ?? '',
        email: u.email ?? '',
        role: u.role === 'admin' ? 'Admin' : u.role === 'instructor' ? 'Instructor' : 'Student',
        status: u.isActive ? 'Active' : 'Suspended',
      }));

      setUsers(mapped);
      setTotal(res?.data?.pagination?.total ?? mapped.length ?? 0);
    } catch (err) {
      if ((err as Error)?.name === 'AbortError') return;
      showToast(err instanceof Error ? err.message : 'Failed to load users', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
    return () => abortRef.current?.abort();
  }, [page, pageSize, sortBy, sortOrder, search]);

  const openEdit = (user: User) => {
    setEditingUser(user);
    setOpenModal(true);
  };

  const openCreate = () => {
    setEditingUser(null);
    setOpenModal(true);
  };

  const handleSubmit = async () => {
    setOpenModal(false);
    await fetchUsers();
  };

  return (
    <div className="space-y-6">
      {/* Card + Toolbar */}
      <div className="bg-white rounded-2xl shadow-md ring-1 ring-black/5 overflow-hidden">
        <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100">
          <div>
            <h2 className="text-lg font-semibold">User Management</h2>
            <p className="text-sm text-gray-500 mt-0.5">Manage platform users and access levels</p>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
              placeholder="Search..."
              className="w-64 rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              onClick={openCreate}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 active:scale-[.98] shadow-sm transition"
            >
              <FiUserPlus /> Add User
            </button>
          </div>
        </div>

        {/* Table */}
        <Table
          headers={[
            { key: 'name', label: 'User', sortable: true },
            { key: 'email', label: 'Email', sortable: true },
            { key: 'role', label: 'Role', sortable: true },
            { key: 'isActive', label: 'Status', sortable: true },
            { key: 'actions', label: '' },
          ]}
          isEmpty={!loading && users.length === 0}
          sortBy={sortBy}
          sortOrder={sortOrder}
          onSortChange={(key, order) => {
            if (key === 'actions') return;
            setSortBy(key as typeof sortBy);
            setSortOrder(order as SortOrder);
            setPage(1);
          }}
        >
          {users.map((u) => (
            <tr key={u._id} className="hover:bg-gray-50 transition-all duration-150">
              <td className="px-5 py-3 flex items-center gap-3">
                <span className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
                  <FiUser className="text-gray-500" />
                </span>
                <span className="font-medium">{u.name}</span>
              </td>

              <td className="px-5 py-3 text-gray-700">{u.email}</td>

              <td className="px-5 py-3">
                <span className="px-3 py-1 rounded-full text-blue-600 bg-blue-50 text-xs font-medium">
                  {u.role}
                </span>
              </td>

              <td className="px-5 py-3">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    u.status === 'Active'
                      ? 'bg-green-50 text-green-600'
                      : 'bg-rose-50 text-rose-600'
                  }`}
                >
                  {u.status}
                </span>
              </td>

              <td className="px-4 py-3 text-right">
                <UserActionsDropdown
                  onEdit={() => openEdit(u)}
                  onDelete={() => console.log('Delete', u._id)}
                />
              </td>
            </tr>
          ))}
        </Table>

        {/* Footer */}
        <div className="flex items-center justify-between px-5 py-3 bg-gray-50">
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">
              Page {page} of {totalPages}
            </span>

            <PageSizeSelect
              value={pageSize}
              options={[5, 10, 20]}
              onChange={(v) => {
                setPage(1);
                setPageSize(v);
              }}
            />
          </div>

          <Pagination page={page} totalPages={totalPages} onChange={setPage} />
        </div>
      </div>

      {/* Modal */}
      <UserFormModal
        open={openModal}
        user={editingUser}
        onClose={() => setOpenModal(false)}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
