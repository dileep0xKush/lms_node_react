import { useEffect, useState } from 'react';
import { FiUserPlus, FiUser } from 'react-icons/fi';

import Table from '../../components/Table';
import Pagination from '../../components/Pagination';
import UserActionsDropdown from '../../components/UserActionsDropdown';
import UserFormModal from './UserFormModal';
import ConfirmDialog from '../../components/ConfirmDialog';
import { getUsersApi, createUser, updateUser, deleteUser } from '../../services/userService';
import { useToast } from '../../components/toast/useToast';
import { usePagination } from '../../hooks/usePagination';
import PageSizeSelect from '../../components/PageSizeSelect';
import type { UserForm } from '../../types/user';
import { display } from '../../utils/display';
import Button from '../../components/Button';

type SortOrder = 'asc' | 'desc';
type User = UserForm & { _id: string };

export default function Users() {
  const { showToast } = useToast();

  const [modalUser, setModalUser] = useState<User | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<User | null>(null);
  const [deleting, setDeleting] = useState(false);

  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'email' | 'role' | 'createdAt'>('createdAt');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');

  const { page, pageSize, totalPages, setPage, setPageSize, setTotal } = usePagination();

  const fetchUsers = async () => {
    try {
      const res = await getUsersApi({
        page,
        limit: pageSize,
        sortBy,
        sortOrder,
        search,
      });

      const list = res.data.users ?? [];
      setUsers(
        list.map((u) => ({
          _id: u._id,
          name: u.name,
          email: u.email,
          role: u.role ?? '',
          status: u.isActive ? 'Active' : 'Suspended',
        })),
      );

      setTotal(res.data.pagination.total);
    } catch {
      showToast('Failed to load users', 'error');
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [page, pageSize, sortBy, sortOrder, search]);

  const handleSubmit = async (data: UserForm) => {
    try {
      const payload = {
        name: data.name,
        email: data.email,
        roleId: data.role,
        ...(data.password ? { password: data.password } : {}),
      };

      data._id ? await updateUser(data._id, payload) : await createUser(payload);

      showToast(data._id ? 'User updated successfully' : 'User created successfully', 'success');

      setModalUser(null);
      fetchUsers();
    } catch {
      showToast('Failed to save user', 'error');
    }
  };

  const confirmDelete = async () => {
    if (!deleteTarget) return;

    try {
      setDeleting(true);
      await deleteUser(deleteTarget._id);
      showToast('User deleted successfully', 'success');
      setDeleteTarget(null);
      fetchUsers();
    } catch {
      showToast('Failed to delete user', 'error');
    } finally {
      setDeleting(false);
    }
  };

  return (
    <>
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow-md">
          {/* Toolbar */}
          <div className="flex justify-between p-4">
            <h2 className="text-lg font-semibold">User Management</h2>

            <div className="flex gap-3">
              <input
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
                placeholder="Search..."
                className="border rounded-lg px-3 py-2 text-sm"
              />

              <Button onClick={() => setModalUser({} as User)}>
                <FiUserPlus />
                Add User
              </Button>
            </div>
          </div>

          <Table
            headers={[
              { key: 'name', label: 'User', sortable: true, width: '30%' },
              { key: 'email', label: 'Email', sortable: true, width: '40%' },
              { key: 'role', label: 'Role', sortable: true, width: '20%' },
              { key: 'actions', label: 'Actions', width: '10%' },
            ]}
            sortBy={sortBy}
            sortOrder={sortOrder}
            isEmpty={users.length === 0}
            onSortChange={(key, order) => {
              if (key === 'actions') return;
              setSortBy(key as typeof sortBy);
              setSortOrder(order);
              setPage(1);
            }}
          >
            {users.map((u) => (
              <tr key={u._id} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 flex gap-2 items-center">
                  <FiUser /> {display(u.name)}
                </td>
                <td className="px-4 py-3">{display(u.email)}</td>
                <td className="px-4 py-3">{display(u.role)}</td>
                <td className="px-4 py-3 text-right">
                  <UserActionsDropdown
                    onEdit={() => setModalUser(u)}
                    onDelete={() => setDeleteTarget(u)}
                  />
                </td>
              </tr>
            ))}
          </Table>

          <div className="flex justify-between p-4">
            <PageSizeSelect
              value={pageSize}
              options={[5, 10, 20]}
              onChange={(v) => {
                setPageSize(v);
                setPage(1);
              }}
            />
            <Pagination page={page} totalPages={totalPages} onChange={setPage} />
          </div>
        </div>

        <UserFormModal
          open={!!modalUser}
          user={modalUser && modalUser._id ? modalUser : null}
          onClose={() => setModalUser(null)}
          onSubmit={handleSubmit}
        />
      </div>

      <ConfirmDialog
        open={!!deleteTarget}
        title="Delete User"
        message={`Are you sure you want to delete "${deleteTarget?.name}"?`}
        onClose={() => setDeleteTarget(null)}
        onConfirm={confirmDelete}
        loading={deleting}
      />
    </>
  );
}
