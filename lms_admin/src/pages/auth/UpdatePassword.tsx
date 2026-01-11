import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { FiEye, FiEyeOff } from 'react-icons/fi';

import PublicLayout from '../../layouts/PublicLayout';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { FormField } from '../../components/form/FormField';

import { useToast } from '../../components/toast/useToast';
import { useLoader } from '../../context/LoaderContext';
import { validators } from '../../utils/validation';
import { useFormValidator } from '../../hooks/useFormValidator';
import { resetPasswordApi } from '../../services/authService';

type ResetForm = {
  password: string;
  confirm: string;
};

export default function UpdatePassword() {
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const { showToast } = useToast();
  const { showLoader, hideLoader } = useLoader();
  const navigate = useNavigate();
  const [params] = useSearchParams();

  const token = params.get('token');

  useEffect(() => {
    document.title = 'Update Password — LMS Admin';
  }, []);

  const { values, errors, handleChange, validateForm, setErrors } = useFormValidator<ResetForm>(
    { password: '', confirm: '' },
    {
      password: [validators.min(6)],
      confirm: [validators.min(6)],
    },
  );

  const validateConfirmMatch = (confirmValue: string) => {
    if (confirmValue && confirmValue !== values.password) {
      setErrors((prev) => ({ ...prev, confirm: 'Passwords must match' }));
      return false;
    }

    setErrors((prev) => ({ ...prev, confirm: undefined }));
    return true;
  };

  const handleSubmit = async () => {
    const ok = validateForm();
    const matchOk = validateConfirmMatch(values.confirm);

    if (!ok || !matchOk) return;

    if (!token) {
      showToast('Invalid or expired reset link', 'error');
      return;
    }

    try {
      showLoader();
      await resetPasswordApi(token, values.password);
      showToast('Password updated successfully', 'success');
      navigate('/login', { replace: true });
    } catch (err) {
      showToast(
        err instanceof Error ? err.message : 'Password update failed. Please try again.',
        'error',
      );
    } finally {
      hideLoader();
    }
  };

  return (
    <PublicLayout>
      <div className="relative min-h-screen flex items-center justify-center px-4">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/app_bg_image.avif')" }}
        />
        <div className="absolute inset-0 bg-black/60" />

        {/* Card */}
        <div className="relative w-full max-w-md bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/40 p-6 sm:p-8">
          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-extrabold tracking-wide">
              Update <span className="text-blue-600">Password</span>
            </h2>
            <p className="text-sm text-gray-500 mt-1">Enter your new password below</p>
          </div>

          {/* Form */}
          <div className="space-y-5">
            {/* New password */}
            <FormField label="New Password" required error={errors.password}>
              <Input
                type={showNew ? 'text' : 'password'}
                value={values.password}
                onChange={(e) => {
                  handleChange('password')(e);
                  validateConfirmMatch(values.confirm);
                }}
                placeholder="••••••••"
                error={errors.password}
                rightIcon={
                  <button
                    type="button"
                    onClick={() => setShowNew((v) => !v)}
                    className="hover:text-gray-600"
                  >
                    {showNew ? <FiEyeOff /> : <FiEye />}
                  </button>
                }
              />
            </FormField>

            {/* Confirm password */}
            <FormField label="Confirm Password" required error={errors.confirm}>
              <Input
                type={showConfirm ? 'text' : 'password'}
                value={values.confirm}
                onChange={(e) => {
                  handleChange('confirm')(e);
                  validateConfirmMatch(e.target.value);
                }}
                placeholder="••••••••"
                error={errors.confirm}
                rightIcon={
                  <button
                    type="button"
                    onClick={() => setShowConfirm((v) => !v)}
                    className="hover:text-gray-600"
                  >
                    {showConfirm ? <FiEyeOff /> : <FiEye />}
                  </button>
                }
              />
            </FormField>

            {/* Action */}
            <Button className="w-full mt-2" onClick={handleSubmit}>
              Update Password
            </Button>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
