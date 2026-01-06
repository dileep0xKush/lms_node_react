import { useEffect, useState } from 'react';
import PublicLayout from '../../layouts/PublicLayout';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useToast } from '../../components/toast/useToast';
import { useLoader } from '../../context/LoaderContext';
import { forgotPasswordApi } from '../../services/authService';
import { validators } from '../../utils/validation';
import { useFormValidator } from '../../hooks/useFormValidator';

export default function ForgotPassword() {
  const { showToast } = useToast();
  const { showLoader, hideLoader } = useLoader();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = 'Forgot Password — LMS Admin';
  }, []);

  // 👇 central form validation
  const { values, errors, handleChange, validateForm } = useFormValidator(
    { email: '' },
    { email: [validators.email] },
  );

  const handleSubmit = async () => {
    if (!validateForm()) return;

    try {
      setLoading(true);
      showLoader();

      await forgotPasswordApi(values.email);

      showToast('Reset link sent to your email', 'success');
    } catch (err) {
      const message =
        err instanceof Error ? err.message : 'Failed to send reset link. Please try again.';
      showToast(message, 'error');
    } finally {
      hideLoader();
      setLoading(false);
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
            <h2 className="text-2xl font-extrabold tracking-wide">Reset Password</h2>
            <p className="text-gray-500 text-sm">Enter your email to receive reset instructions</p>
          </div>

          <div className="space-y-4">
            <Input
              label="Email"
              type="email"
              value={values.email}
              onChange={handleChange('email')}
              error={errors.email}
            />

            <Button className="w-full mt-1" onClick={handleSubmit} disabled={loading}>
              {loading ? 'Sending...' : 'Send Reset Link'}
            </Button>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
