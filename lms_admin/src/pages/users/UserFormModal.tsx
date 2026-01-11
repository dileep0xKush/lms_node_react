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
import { USER_FORM, STATUS, STATUS_LABEL, type StatusValue } from '../../constants/user';

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
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export default function UserFormModal({ open, user, onClose, onSubmit }: Props) {
  const [showPassword, setShowPassword] = useState(false);

  const { values, errors, handleChange, validateForm, setValues, setErrors } =
    useFormValidator<UserForm>(USER_FORM.INITIAL_VALUES, {
      name: [validators.required, validators.min(3)],
      email: [validators.email],
      password: user ? [] : [validators.required, validators.min(6)],
      role: [validators.required],
    });

  const { roles, loading } = useRoles(open);

  useEffect(() => {
    if (!open) return;

    setValues(user ? { ...user, password: '' } : USER_FORM.INITIAL_VALUES);
    setErrors({});
    setShowPassword(false);
  }, [open, user, setValues, setErrors]);

  if (!open) return null;

  const submit = () => {
    if (!validateForm()) return;
    onSubmit({ ...values, _id: user?._id });
  };

  return (
    <Modal
      size="xl"
      title={user ? USER_FORM.MODAL_TITLE.EDIT : USER_FORM.MODAL_TITLE.ADD}
      onClose={onClose}
      onSubmit={submit}
    >
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Full Name */}
          <FormField label={USER_FORM.FIELDS.NAME.LABEL} required error={errors.name}>
            <Input
              value={values.name}
              onChange={handleChange('name')}
              placeholder={USER_FORM.FIELDS.NAME.PLACEHOLDER}
              error={errors.name}
            />
          </FormField>

          {/* Email */}
          <FormField label={USER_FORM.FIELDS.EMAIL.LABEL} required error={errors.email}>
            <Input
              type="email"
              value={values.email}
              onChange={handleChange('email')}
              placeholder={USER_FORM.FIELDS.EMAIL.PLACEHOLDER}
              error={errors.email}
            />
          </FormField>

          {/* Password */}
          {!user && (
            <FormField label={USER_FORM.FIELDS.PASSWORD.LABEL} required error={errors.password}>
              <Input
                type={showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                placeholder={USER_FORM.FIELDS.PASSWORD.PLACEHOLDER}
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
          <FormField label={USER_FORM.FIELDS.ROLE.LABEL} required error={errors.role}>
            <Dropdown
              value={
                roles.find((r) => r._id === values.role)?.name || USER_FORM.FIELDS.ROLE.PLACEHOLDER
              }
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
          <FormField label={USER_FORM.FIELDS.STATUS.LABEL}>
            <Dropdown value={values.status} align="left">
              {(Object.values(STATUS) as StatusValue[]).map((status) => (
                <Dropdown.Item
                  key={status}
                  active={values.status === status}
                  onClick={() => setValues((v) => ({ ...v, status }))}
                >
                  {STATUS_LABEL[status]}
                </Dropdown.Item>
              ))}
            </Dropdown>
          </FormField>
        </div>
      </div>
    </Modal>
  );
}
