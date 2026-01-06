import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import PublicLayout from '../../layouts/PublicLayout';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { FiEye, FiEyeOff } from 'react-icons/fi';
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
    {
      password: '',
      confirm: '',
    },
    {
      password: [validators.min(6)],
      confirm: [validators.min(6)],
    },
  );

  // ✔ validate using latest value (no stale state)
  const validateConfirmMatch = (confirmValue: string) => {
    if (confirmValue && confirmValue !== values.password) {
      setErrors((prev) => ({
        ...prev,
        confirm: 'Passwords must match',
      }));
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
      showToast('Invalid or missing reset token', 'error');
      return;
    }

    try {
      showLoader();

      await resetPasswordApi(token, values.password);

      showToast('Password updated successfully', 'success');
      navigate('/', { replace: true });
    } catch (err) {
      const message =
        err instanceof Error ? err.message : 'Password update failed. Please try again.';
      showToast(message, 'error');
    } finally {
      hideLoader();
    }
  };

  return (
    <PublicLayout>
      <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/app_bg_image.avif')" }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/40 p-6 sm:p-8 w-[95%] max-w-md">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-extrabold tracking-wide">Update Password</h2>
            <p className="text-gray-500 text-sm">Enter your new password below</p>
          </div>

          <div className="space-y-4">
            <Input
              label="New Password"
              type={showNew ? 'text' : 'password'}
              value={values.password}
              onChange={(e) => {
                handleChange('password')(e);
                validateConfirmMatch(values.confirm); // recheck with latest confirm
              }}
              error={errors.password}
              rightIcon={
                showNew ? (
                  <FiEyeOff onClick={() => setShowNew(false)} />
                ) : (
                  <FiEye onClick={() => setShowNew(true)} />
                )
              }
            />

            <Input
              label="Confirm Password"
              type={showConfirm ? 'text' : 'password'}
              value={values.confirm}
              onChange={(e) => {
                handleChange('confirm')(e);
                validateConfirmMatch(e.target.value); // validate with new value
              }}
              error={errors.confirm}
              rightIcon={
                showConfirm ? (
                  <FiEyeOff onClick={() => setShowConfirm(false)} />
                ) : (
                  <FiEye onClick={() => setShowConfirm(true)} />
                )
              }
            />

            <Button className="w-full mt-1" onClick={handleSubmit}>
              Update Password
            </Button>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
