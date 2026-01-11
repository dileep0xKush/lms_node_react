import { useState } from 'react';
import {
  STATUS,
  STATUS_LABEL,
  STATUS_UI,
  STATUS_TEXT,
  UI_TEXT,
  type StatusValue,
} from '../constants/user';
import ConfirmDialog from './ConfirmDialog';

type StatusProps = {
  status: StatusValue;
  onConfirm: (nextStatus: StatusValue) => Promise<void> | void;
  disabled?: boolean;
};

export default function Status({ status, onConfirm, disabled = false }: StatusProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const isActive = status === STATUS.ACTIVE;
  const nextStatus: StatusValue = isActive ? STATUS.INACTIVE : STATUS.ACTIVE;

  const handleConfirm = async () => {
    try {
      setLoading(true);
      await onConfirm(nextStatus);
      setOpen(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Status badge */}
      <button
        type="button"
        disabled={disabled}
        onClick={() => !disabled && setOpen(true)}
        className={`
          inline-flex items-center gap-2 px-3 py-1 rounded-full
          text-xs font-semibold transition-all ring-1
          ${STATUS_UI.badge[status]}
          ${disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'}
        `}
      >
        <span className={`w-2 h-2 rounded-full ${STATUS_UI.dot[status]}`} />
        {STATUS_LABEL[status]}
      </button>

      {/* Confirm dialog */}
      <ConfirmDialog
        open={open}
        title={STATUS_TEXT.MODAL_TITLE}
        message={STATUS_TEXT.MODAL_MESSAGE(STATUS_LABEL[nextStatus])}
        confirmText={UI_TEXT.CONFIRM}
        cancelText={UI_TEXT.CANCEL}
        loading={loading}
        onClose={() => setOpen(false)}
        onConfirm={handleConfirm}
      />
    </>
  );
}
