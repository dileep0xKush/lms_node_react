import { useEffect, useState } from 'react';
import { FiUserPlus, FiUser } from 'react-icons/fi';

import Table from '../../components/Table';
import Pagination from '../../components/Pagination';
import UserActionsDropdown from '../../components/UserActionsDropdown';
import UserFormModal from './UserFormModal';
import UserViewModal from './UserViewModal';
import ConfirmDialog from '../../components/ConfirmDialog';

import {
  getUsersApi,
  createUser,
  updateUser,
  deleteUser,
  updateUserStatus,
} from '../../services/userService';

import { useToast } from '../../components/toast/useToast';
import { usePagination } from '../../hooks/usePagination';
import PageSizeSelect from '../../components/PageSizeSelect';

import type { UserForm } from '../../types/user';
import { display } from '../../utils/display';

import Button from '../../components/Button';
import Status from '../../components/Status';

import { USERS_TEXT, PAGE_SIZE_OPTIONS, type StatusValue } from '../../constants/user';
import AvatarInitial from '../../components/AvatarInitial';

type SortOrder = 'asc' | 'desc';

type User = UserForm & {
  _id: string;
  status: StatusValue;
};

export default function Users() {
  const { showToast } = useToast();

  const [users, setUsers] = useState<User[]>([]);
  const [editUser, setEditUser] = useState<User | null>(null);
  const [viewUser, setViewUser] = useState<User | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<User | null>(null);
  const [deleting, setDeleting] = useState(false);

  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'email' | 'role' | 'createdAt'>('createdAt');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');

  const { page, pageSize, totalPages, setPage, setPageSize, setTotal } = usePagination();

  /* ---------------- Fetch users ---------------- */

  const fetchUsers = async () => {
    try {
      const res = await getUsersApi({
        page,
        limit: pageSize,
        sortBy,
        sortOrder,
        search,
      });

      setUsers(
        (res.data.users ?? []).map((u) => ({
          _id: u._id,
          name: u.name,
          email: u.email,
          role: u.role ?? '',
          status: u.isActive ? 'active' : 'inactive',
        })),
      );

      setTotal(res.data.pagination.total);
    } catch {
      showToast(USERS_TEXT.TOAST.LOAD_ERROR, 'error');
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [page, pageSize, sortBy, sortOrder, search]);

  /* ---------------- Status change ---------------- */

  const handleStatusChange = async (userId: string, nextStatus: StatusValue) => {
    try {
      await updateUserStatus(userId, nextStatus === 'active');

      setUsers((prev) => prev.map((u) => (u._id === userId ? { ...u, status: nextStatus } : u)));

      showToast(USERS_TEXT.TOAST.STATUS_SUCCESS, 'success');
    } catch {
      showToast(USERS_TEXT.TOAST.STATUS_ERROR, 'error');
    }
  };

  /* ---------------- Add / Edit ---------------- */

  const handleSubmit = async (data: UserForm) => {
    try {
      const payload = {
        name: data.name,
        email: data.email,
        roleId: data.role,
        ...(data.password ? { password: data.password } : {}),
      };

      data._id ? await updateUser(data._id, payload) : await createUser(payload);

      showToast(USERS_TEXT.TOAST.SAVE_SUCCESS(!!data._id), 'success');
      setEditUser(null);
      fetchUsers();
    } catch {
      showToast(USERS_TEXT.TOAST.SAVE_ERROR, 'error');
    }
  };

  /* ---------------- Delete ---------------- */

  const confirmDelete = async () => {
    if (!deleteTarget) return;

    try {
      setDeleting(true);
      await deleteUser(deleteTarget._id);
      showToast(USERS_TEXT.TOAST.DELETE_SUCCESS, 'success');
      setDeleteTarget(null);
      fetchUsers();
    } catch {
      showToast(USERS_TEXT.TOAST.DELETE_ERROR, 'error');
    } finally {
      setDeleting(false);
    }
  };

  /* ---------------- Render ---------------- */

  return (
    <>
      <div className="bg-white rounded-lg shadow-md">
        {/* Toolbar */}
        <div className="flex justify-between p-4">
          <h2 className="text-lg font-semibold">{USERS_TEXT.PAGE_TITLE}</h2>

          <div className="flex gap-3">
            <input
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
              placeholder={USERS_TEXT.SEARCH_PLACEHOLDER}
              className="border rounded-lg px-3 py-2 text-sm"
            />

            <Button onClick={() => setEditUser({} as User)}>
              <FiUserPlus />
              {USERS_TEXT.ADD_USER}
            </Button>
          </div>
        </div>

        {/* Table */}
        <Table
          headers={[
            { key: 'name', label: USERS_TEXT.TABLE_HEADERS.NAME, sortable: true },
            { key: 'email', label: USERS_TEXT.TABLE_HEADERS.EMAIL, sortable: true },
            { key: 'role', label: USERS_TEXT.TABLE_HEADERS.ROLE, sortable: true },
            { key: 'status', label: USERS_TEXT.TABLE_HEADERS.STATUS, sortable: true },
            { key: 'actions', label: USERS_TEXT.TABLE_HEADERS.ACTIONS },
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
            <tr key={u._id}>
              <td className="px-4 py-3 flex items-center gap-3">
                <AvatarInitial name={u.name} />
                <span>{display(u.name)}</span>
              </td>

              <td className="px-4 py-3">{display(u.email)}</td>
              <td className="px-4 py-3">{display(u.role)}</td>

              <td className="px-4 py-3">
                <Status status={u.status} onConfirm={(next) => handleStatusChange(u._id, next)} />
              </td>

              <td className="px-4 py-3">
                <UserActionsDropdown
                  onView={() => setViewUser(u)}
                  onEdit={() => setEditUser(u)}
                  onDelete={() => setDeleteTarget(u)}
                />
              </td>
            </tr>
          ))}
        </Table>

        {/* Footer */}
        <div className="flex justify-between p-4">
          <PageSizeSelect
            value={pageSize}
            options={[...PAGE_SIZE_OPTIONS]}
            onChange={(v) => {
              setPageSize(v);
              setPage(1);
            }}
          />
          <Pagination page={page} totalPages={totalPages} onChange={setPage} />
        </div>
      </div>

      {/* View */}
      <UserViewModal open={!!viewUser} user={viewUser} onClose={() => setViewUser(null)} />

      {/* Add / Edit */}
      <UserFormModal
        open={!!editUser}
        user={editUser && editUser._id ? editUser : null}
        onClose={() => setEditUser(null)}
        onSubmit={handleSubmit}
      />

      {/* Delete */}
      <ConfirmDialog
        open={!!deleteTarget}
        title={USERS_TEXT.DELETE_CONFIRM.TITLE}
        message={USERS_TEXT.DELETE_CONFIRM.MESSAGE(deleteTarget?.name)}
        onClose={() => setDeleteTarget(null)}
        onConfirm={confirmDelete}
        loading={deleting}
      />
    </>
  );
}
