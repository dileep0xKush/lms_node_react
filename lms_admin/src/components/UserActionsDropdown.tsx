import { FiEye, FiEdit2, FiTrash2 } from 'react-icons/fi';

type Props = {
  onView: () => void;
  onEdit: () => void;
  onDelete: () => void;
};

export default function UserActions({ onView, onEdit, onDelete }: Props) {
  return (
    <div className="flex items-center justify-start gap-1">
      {/* View */}
      <button
        type="button"
        onClick={onView}
        className="
          p-2 rounded-lg
          text-blue-600
          hover:bg-blue-50
          transition
        "
        aria-label="View user"
        title="View"
      >
        <FiEye />
      </button>

      {/* Edit */}
      <button
        type="button"
        onClick={onEdit}
        className="
          p-2 rounded-lg
          text-gray-600
          hover:bg-gray-100
          hover:text-gray-800
          transition
        "
        aria-label="Edit user"
        title="Edit"
      >
        <FiEdit2 />
      </button>

      {/* Delete */}
      <button
        type="button"
        onClick={onDelete}
        className="
          p-2 rounded-lg
          text-red-600
          hover:bg-red-50
          transition
        "
        aria-label="Delete user"
        title="Delete"
      >
        <FiTrash2 />
      </button>
    </div>
  );
}
