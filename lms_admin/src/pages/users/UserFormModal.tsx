import Modal from '../../components/Modal';

export type UserForm = {
  _id?: string;
  name: string;
  email: string;
  role: 'Student' | 'Instructor' | 'Admin';
  status: 'Active' | 'Suspended';
};

type Props = {
  open: boolean;
  user: UserForm | null;
  onClose: () => void;
  onSubmit: (data: UserForm) => void;
};

export default function UserFormModal({ open, user, onClose, onSubmit }: Props) {
  if (!open) return null;

  const handleSubmit = () => {
    onSubmit({
      _id: user?._id,
      name: (document.getElementById('name') as HTMLInputElement).value,
      email: (document.getElementById('email') as HTMLInputElement).value,
      role: (document.getElementById('role') as HTMLSelectElement).value as UserForm['role'],
      status: (document.getElementById('status') as HTMLSelectElement).value as UserForm['status'],
    });
  };

  return (
    <Modal
      size="xl"
      title={user ? 'Edit User' : 'Add New User'}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="text-xs text-gray-500">Full Name</label>
          <input
            id="name"
            className="w-full border rounded-lg px-3 py-2"
            defaultValue={user?.name ?? ''}
          />
        </div>

        <div>
          <label className="text-xs text-gray-500">Email</label>
          <input
            id="email"
            className="w-full border rounded-lg px-3 py-2"
            defaultValue={user?.email ?? ''}
          />
        </div>

        <div>
          <label className="text-xs text-gray-500">Role</label>
          <select
            id="role"
            className="w-full border rounded-lg px-3 py-2"
            defaultValue={user?.role ?? 'Student'}
          >
            <option>Student</option>
            <option>Instructor</option>
            <option>Admin</option>
          </select>
        </div>

        <div>
          <label className="text-xs text-gray-500">Status</label>
          <select
            id="status"
            className="w-full border rounded-lg px-3 py-2"
            defaultValue={user?.status ?? 'Active'}
          >
            <option>Active</option>
            <option>Suspended</option>
          </select>
        </div>
      </div>
    </Modal>
  );
}
