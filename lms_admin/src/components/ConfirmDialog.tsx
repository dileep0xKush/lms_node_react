import { FiAlertTriangle } from 'react-icons/fi';
import Modal from './Modal';

type Props = {
  open: boolean;
  title?: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  loading?: boolean;
  onConfirm: () => void;
  onClose: () => void;
};

export default function ConfirmDialog({
  open,
  title = 'Confirm Action',
  message,
  confirmText = 'Delete',
  cancelText = 'Cancel',
  loading = false,
  onConfirm,
  onClose,
}: Props) {
  if (!open) return null;

  return (
    <Modal size="lg" title={title} onClose={onClose} hideFooter>
      <div className="space-y-4">
        {/* Message */}
        <div className="flex gap-3">
          <div className="flex-shrink-0 mt-0.5 text-red-600">
            <FiAlertTriangle size={20} />
          </div>

          <p className="text-sm text-gray-600 leading-relaxed">{message}</p>
        </div>

        {/* Actions */}
        <div className="pt-4 flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            className="
              px-4 py-2 rounded-lg border text-sm
              hover:bg-gray-50
              disabled:opacity-50 disabled:cursor-not-allowed
            "
          >
            {cancelText}
          </button>

          <button
            type="button"
            onClick={onConfirm}
            disabled={loading}
            className="
              px-4 py-2 rounded-lg text-sm text-white
              bg-red-600 hover:bg-red-700
              disabled:opacity-60 disabled:cursor-not-allowed
            "
          >
            {loading ? 'Deleting…' : confirmText}
          </button>
        </div>
      </div>
    </Modal>
  );
}
