import { useEffect, useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

import Modal from '../../components/Modal';
import Input from '../../components/Input';
import Dropdown from '../../components/Dropdown';
import { FormField } from '../../components/form/FormField';

import { useFormValidator } from '../../hooks/useFormValidator';
import { useRoles } from '../../hooks/useRoles';
import { validators } from '../../utils/validation';

import type { UserForm } from '../../types/user';

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

type Props = {
  open: boolean;
  user: UserForm | null;
  onClose: () => void;
  onSubmit: (data: UserForm) => void;
};

/* -------------------------------------------------------------------------- */
/* Constants                                                                  */
/* -------------------------------------------------------------------------- */

const initialForm: UserForm = {
  name: '',
  email: '',
  password: '',
  role: '',
  status: 'Active',
};

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export default function UserFormModal({ open, user, onClose, onSubmit }: Props) {
  const [showPassword, setShowPassword] = useState(false);

  const { values, errors, handleChange, validateForm, setValues, setErrors } =
    useFormValidator<UserForm>(initialForm, {
      name: [validators.required, validators.min(3)],
      email: [validators.email],
      password: user ? [] : [validators.required, validators.min(6)],
      role: [validators.required],
    });

  const { roles, loading } = useRoles(open);

  useEffect(() => {
    if (!open) return;
    setValues(user ? { ...user, password: '' } : initialForm);
    setErrors({});
    setShowPassword(false);
  }, [open, user, setValues, setErrors]);

  if (!open) return null;

  const submit = () => {
    if (!validateForm()) return;
    onSubmit({ ...values, _id: user?._id });
  };

  return (
    <Modal size="xl" title={user ? 'Edit User' : 'Add User'} onClose={onClose} onSubmit={submit}>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Name */}
          <FormField label="Full Name" required error={errors.name}>
            <Input
              value={values.name}
              onChange={handleChange('name')}
              placeholder="John Doe"
              error={errors.name}
            />
          </FormField>

          {/* Email */}
          <FormField label="Email" required error={errors.email}>
            <Input
              type="email"
              value={values.email}
              onChange={handleChange('email')}
              placeholder="john@example.com"
              error={errors.email}
            />
          </FormField>

          {/* Password */}
          {!user && (
            <FormField label="Password" required error={errors.password}>
              <Input
                type={showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                placeholder="••••••••"
                error={errors.password}
                rightIcon={
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="hover:text-gray-600"
                  >
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                  </button>
                }
              />
            </FormField>
          )}

          {/* Role */}
          <FormField label="Role" required error={errors.role}>
            <Dropdown
              value={roles.find((r) => r._id === values.role)?.name || 'Select role'}
              error={!!errors.role}
              disabled={loading}
              align="left"
              searchable
              maxHeight={220}
            >
              {roles.map((role) => (
                <Dropdown.Item
                  key={role._id}
                  active={values.role === role._id}
                  onClick={() => setValues((v) => ({ ...v, role: role._id }))}
                >
                  {role.name}
                </Dropdown.Item>
              ))}
            </Dropdown>
          </FormField>

          {/* Status */}
          <FormField label="Status">
            <Dropdown value={values.status} align="left" searchable maxHeight={220}>
              {(['Active', 'Suspended'] as const).map((status) => (
                <Dropdown.Item
                  key={status}
                  active={values.status === status}
                  onClick={() => setValues((v) => ({ ...v, status }))}
                >
                  {status}
                </Dropdown.Item>
              ))}
            </Dropdown>
          </FormField>
        </div>
      </div>
    </Modal>
  );
}
