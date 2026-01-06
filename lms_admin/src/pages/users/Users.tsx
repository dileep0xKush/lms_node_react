import { useEffect, useRef, useState } from "react";
import { FiUserPlus, FiUser } from "react-icons/fi";
import Card from "../../components/Card";
import Table from "../../components/Table";
import Pagination from "../../components/Pagination";
import UserActionsDropdown from "../../components/UserActionsDropdown";
import UserFormModal, { type UserForm } from "./UserFormModal";
import { getUsersApi } from "../../services/userService";
import { useToast } from "../../components/toast/useToast";
import { useLoader } from "../../context/LoaderContext";

type User = UserForm & {
  _id: string;
};

export default function Users() {
  const { showToast } = useToast();
  const { showLoader, hideLoader } = useLoader();

  const [openModal, setOpenModal] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  const [page, setPage] = useState(1);
  const pageSize = 5;

  const [users, setUsers] = useState<User[]>([]);

  const loadedRef = useRef(false);
  const abortRef = useRef<AbortController | null>(null);

  const fetchUsers = async () => {
    try {
      showLoader();

      abortRef.current?.abort();
      abortRef.current = new AbortController();

      const res = await getUsersApi();

      const mapped: User[] =
        res.data.users.map((u) => ({
          _id: u._id,
          name: u.name ?? "",
          email: u.email ?? "",
          role:
            u.role === "admin"
              ? "Admin"
              : u.role === "instructor"
              ? "Instructor"
              : "Student",
          status: u.isActive ? "Active" : "Suspended",
        })) ?? [];

      setUsers(mapped);
    } catch (err: any) {
      if (err?.name === "AbortError") return;

      const msg = err instanceof Error ? err.message : "Failed to load users";
      showToast(msg, "error");
    } finally {
      hideLoader();
    }
  };

  useEffect(() => {
    if (loadedRef.current) return;
    loadedRef.current = true;

    fetchUsers();

    return () => abortRef.current?.abort();
  }, []);

  const totalPages = Math.ceil(users.length / pageSize) || 1;
  const pagedUsers = users.slice((page - 1) * pageSize, page * pageSize);

  const openEdit = (user: User) => {
    setEditingUser(user);
    setOpenModal(true);
  };

  const openCreate = () => {
    setEditingUser(null);
    setOpenModal(true);
  };

  const handleSubmit = async (_data: UserForm) => {
    setOpenModal(false);
    await fetchUsers(); // refresh after save (API integration later)
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">User Management</h2>

        <button
          onClick={openCreate}
          className="flex items-center gap-2 bg-blue-600 text-white px-3 py-2 rounded-xl hover:bg-blue-700 transition"
        >
          <FiUserPlus /> Add User
        </button>
      </div>

      {/* Table */}
      <Card>
        <Table headers={["User", "Email", "Role", "Status", ""]}>
          {pagedUsers.map((u) => (
            <tr key={u._id} className="border-b last:border-none">
              <td className="py-3 px-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                  <FiUser />
                </span>
                {u.name}
              </td>

              <td className="px-3">{u.email}</td>

              <td className="px-3">
                <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded-lg">
                  {u.role}
                </span>
              </td>

              <td className="px-3">
                <span
                  className={`px-2 py-1 rounded-lg ${
                    u.status === "Active"
                      ? "bg-green-50 text-green-600"
                      : "bg-red-50 text-red-600"
                  }`}
                >
                  {u.status}
                </span>
              </td>

              <td className="px-3 text-right">
                <UserActionsDropdown
                  onEdit={() => openEdit(u)}
                  onDelete={() => console.log("Delete", u._id)}
                />
              </td>
            </tr>
          ))}
        </Table>

        <Pagination page={page} totalPages={totalPages} onChange={setPage} />
      </Card>

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
