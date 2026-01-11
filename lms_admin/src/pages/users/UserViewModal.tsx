import { FiUser, FiMail, FiShield } from 'react-icons/fi';
import Modal from '../../components/Modal';
import Status from '../../components/Status';
import type { UserForm } from '../../types/user';
import type { StatusValue } from '../../constants/user';

type User = UserForm & {
  _id: string;
  status: StatusValue;
};

type Props = {
  open: boolean;
  user: User | null;
  onClose: () => void;
};

export default function UserViewModal({ open, user, onClose }: Props) {
  if (!open || !user) return null;

  return (
    <Modal size="xl" title="View User" onClose={onClose} hideFooter>
      <div className="space-y-5">
        <div className="flex items-center gap-3">
          <FiUser className="text-gray-400" />
          <div>
            <p className="text-xs text-gray-500">Name</p>
            <p className="font-medium">{user.name}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <FiMail className="text-gray-400" />
          <div>
            <p className="text-xs text-gray-500">Email</p>
            <p className="font-medium">{user.email}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <FiShield className="text-gray-400" />
          <div>
            <p className="text-xs text-gray-500">Role</p>
            <p className="font-medium">{user.role || '-'}</p>
          </div>
        </div>

        <div>
          <p className="text-xs text-gray-500 mb-1">Status</p>
          <Status status={user.status} onConfirm={() => {}} disabled />
        </div>
      </div>
    </Modal>
  );
}
