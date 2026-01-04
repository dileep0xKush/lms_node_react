import { useState } from "react";
import {
  FiUserPlus,
  FiSearch,
  FiEdit2,
  FiTrash2,
  FiUser,
} from "react-icons/fi";
import Card from "../../components/Card";
import Modal from "../../components/Modal";
import Table from "../../components/Table";
import Pagination from "../../components/Pagination";

type User = {
  id: number;
  name: string;
  email: string;
  role: "Student" | "Instructor" | "Admin";
  status: "Active" | "Suspended";
};

export default function Users() {
  const [openModal, setOpenModal] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [page, setPage] = useState(1);

  const users: User[] = [
    {
      id: 1,
      name: "John Doe",
      email: "john@mail.com",
      role: "Student",
      status: "Active",
    },
    {
      id: 2,
      name: "Sarah Smith",
      email: "sarah@mail.com",
      role: "Instructor",
      status: "Active",
    },
    {
      id: 3,
      name: "Mark Lee",
      email: "mark@mail.com",
      role: "Student",
      status: "Suspended",
    },
  ];

  const pageSize = 5;
  const totalPages = Math.ceil(users.length / pageSize);
  const pagedUsers = users.slice((page - 1) * pageSize, page * pageSize);

  const openEdit = (user: User) => {
    setEditingUser(user);
    setOpenModal(true);
  };

  const openCreate = () => {
    setEditingUser(null);
    setOpenModal(true);
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

      {/* Search + Filters */}
      <Card>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-gray-100 rounded-xl px-3 py-2 w-64">
            <FiSearch className="text-gray-500" />
            <input
              placeholder="Search users…"
              className="bg-transparent outline-none text-sm w-full"
            />
          </div>

          <select className="px-3 py-2 rounded-xl border text-sm">
            <option>All Roles</option>
            <option>Student</option>
            <option>Instructor</option>
            <option>Admin</option>
          </select>
        </div>
      </Card>

      {/* Table + Pagination */}
      <Card>
        <Table headers={["User", "Email", "Role", "Status", ""]}>
          {pagedUsers.map((u) => (
            <tr key={u.id} className="border-b last:border-none">
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

              <td className="px-3 text-right flex justify-end gap-2">
                <button
                  onClick={() => openEdit(u)}
                  className="p-2 rounded-lg hover:bg-gray-100"
                >
                  <FiEdit2 />
                </button>

                <button className="p-2 rounded-lg hover:bg-red-50 text-red-500">
                  <FiTrash2 />
                </button>
              </td>
            </tr>
          ))}
        </Table>

        <Pagination page={page} totalPages={totalPages} onChange={setPage} />
      </Card>

      {/* Modal */}
      {openModal && (
        <Modal
          size="xl"
          title={editingUser ? "Edit User" : "Add New User"}
          onClose={() => setOpenModal(false)}
          onSubmit={() => setOpenModal(false)}
        >
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs text-gray-500">Full Name</label>
              <input
                className="w-full border rounded-lg px-3 py-2"
                defaultValue={editingUser?.name ?? ""}
              />
            </div>

            <div>
              <label className="text-xs text-gray-500">Email</label>
              <input
                className="w-full border rounded-lg px-3 py-2"
                defaultValue={editingUser?.email ?? ""}
              />
            </div>

            <div>
              <label className="text-xs text-gray-500">Role</label>
              <select className="w-full border rounded-lg px-3 py-2">
                <option>Student</option>
                <option>Instructor</option>
                <option>Admin</option>
              </select>
            </div>

            <div>
              <label className="text-xs text-gray-500">Status</label>
              <select className="w-full border rounded-lg px-3 py-2">
                <option>Active</option>
                <option>Suspended</option>
              </select>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
