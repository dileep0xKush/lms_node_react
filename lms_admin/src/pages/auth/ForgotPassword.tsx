import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import PublicLayout from '../../layouts/PublicLayout';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { FormField } from '../../components/form/FormField';

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
      showToast(
        err instanceof Error ? err.message : 'Failed to send reset link. Please try again.',
        'error',
      );
    } finally {
      hideLoader();
      setLoading(false);
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
              Reset <span className="text-blue-600">Password</span>
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Enter your email to receive reset instructions
            </p>
          </div>

          {/* Form */}
          <div className="space-y-5">
            <FormField label="Email" required error={errors.email}>
              <Input
                type="email"
                value={values.email}
                onChange={handleChange('email')}
                placeholder="admin@example.com"
                error={errors.email}
              />
            </FormField>

            <Button className="w-full mt-2" onClick={handleSubmit} disabled={loading}>
              {loading ? 'Sending…' : 'Send Reset Link'}
            </Button>

            {/* Back to login */}
            <p className="text-center text-sm text-gray-600 pt-2">
              Remembered your password?{' '}
              <Link to="/login" className="font-medium text-blue-600 hover:text-blue-700">
                Back to login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
