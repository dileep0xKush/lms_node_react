import { FiEdit2, FiTrash2 } from 'react-icons/fi';

type Props = {
  onEdit: () => void;
  onDelete: () => void;
};

export default function UserActions({ onEdit, onDelete }: Props) {
  return (
    <div className="flex items-center justify-end gap-1">
      {/* Edit */}
      <button
        type="button"
        onClick={onEdit}
        className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-800"
        aria-label="Edit user"
      >
        <FiEdit2 />
      </button>

      {/* Delete */}
      <button
        type="button"
        onClick={onDelete}
        className="p-2 rounded-lg text-red-600 hover:bg-red-50"
        aria-label="Delete user"
      >
        <FiTrash2 />
      </button>
    </div>
  );
}
