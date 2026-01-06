import { FiEdit2, FiTrash2, FiMoreVertical } from 'react-icons/fi';
import Dropdown from './Dropdown';

type Props = {
  onEdit: () => void;
  onDelete: () => void;
};

export default function UserActionsDropdown({ onEdit, onDelete }: Props) {
  return (
    <Dropdown
      trigger={
        <button className="p-2 rounded-lg hover:bg-gray-100">
          <FiMoreVertical />
        </button>
      }
    >
      <ul className="text-sm">
        <li
          className="px-3 py-2 flex items-center gap-2 hover:bg-gray-100 cursor-pointer"
          onClick={onEdit}
        >
          <FiEdit2 /> Edit
        </li>

        <li
          className="px-3 py-2 flex items-center gap-2 text-red-500 hover:bg-red-50 cursor-pointer"
          onClick={onDelete}
        >
          <FiTrash2 /> Delete
        </li>
      </ul>
    </Dropdown>
  );
}
