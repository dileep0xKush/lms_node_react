/* -------------------------------------------------------------------------- */
/* Status                                                                     */
/* -------------------------------------------------------------------------- */

export const STATUS = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
} as const;

export type StatusValue = (typeof STATUS)[keyof typeof STATUS];

export const STATUS_LABEL: Record<StatusValue, string> = {
  active: 'Active',
  inactive: 'Inactive',
};

export const STATUS_UI = {
  badge: {
    active: 'bg-green-50 text-green-700 ring-green-200 hover:bg-green-100',
    inactive: 'bg-red-50 text-red-700 ring-red-200 hover:bg-red-100',
  },
  dot: {
    active: 'bg-green-600',
    inactive: 'bg-red-600',
  },
  confirmButton: {
    active: 'bg-red-600 hover:bg-red-700',
    inactive: 'bg-green-600 hover:bg-green-700',
  },
};

/* -------------------------------------------------------------------------- */
/* Global UI Text                                                             */
/* -------------------------------------------------------------------------- */

export const UI_TEXT = {
  CANCEL: 'Cancel',
  CONFIRM: 'Confirm',
  UPDATING: 'Updating…',
};

/* -------------------------------------------------------------------------- */
/* Status Modal Text                                                          */
/* -------------------------------------------------------------------------- */

export const STATUS_TEXT = {
  MODAL_TITLE: 'Change user status',
  MODAL_MESSAGE: (nextLabel: string) =>
    `This will mark the user as ${nextLabel}. Are you sure you want to continue?`,
};

/* -------------------------------------------------------------------------- */
/* Users Page                                                                 */
/* -------------------------------------------------------------------------- */

export const USERS_TEXT = {
  PAGE_TITLE: 'User Management',
  SEARCH_PLACEHOLDER: 'Search...',
  ADD_USER: 'Add User',

  TABLE_HEADERS: {
    NAME: 'User',
    EMAIL: 'Email',
    ROLE: 'Role',
    STATUS: 'Status',
    ACTIONS: 'Actions',
  },

  TOAST: {
    LOAD_ERROR: 'Failed to load users',
    SAVE_SUCCESS: (isEdit: boolean) =>
      isEdit ? 'User updated successfully' : 'User created successfully',
    SAVE_ERROR: 'Failed to save user',
    DELETE_SUCCESS: 'User deleted successfully',
    DELETE_ERROR: 'Failed to delete user',
    STATUS_SUCCESS: 'Status updated successfully',
    STATUS_ERROR: 'Failed to update status',
  },

  DELETE_CONFIRM: {
    TITLE: 'Delete User',
    MESSAGE: (name?: string) => `Are you sure you want to delete "${name ?? ''}"?`,
  },
};

/* -------------------------------------------------------------------------- */
/* Pagination                                                                 */
/* -------------------------------------------------------------------------- */

export const PAGE_SIZE_OPTIONS = [5, 10, 20] as const;

/* -------------------------------------------------------------------------- */
/* User Form                                                                  */
/* -------------------------------------------------------------------------- */

export const USER_FORM = {
  INITIAL_VALUES: {
    name: '',
    email: '',
    password: '',
    role: '',
    status: STATUS.ACTIVE as StatusValue,
  },

  MODAL_TITLE: {
    ADD: 'Add User',
    EDIT: 'Edit User',
  },

  FIELDS: {
    NAME: {
      LABEL: 'Full Name',
      PLACEHOLDER: 'John Doe',
    },
    EMAIL: {
      LABEL: 'Email',
      PLACEHOLDER: 'john@example.com',
    },
    PASSWORD: {
      LABEL: 'Password',
      PLACEHOLDER: '••••••••',
    },
    ROLE: {
      LABEL: 'Role',
      PLACEHOLDER: 'Select role',
    },
    STATUS: {
      LABEL: 'Status',
    },
  },
};
