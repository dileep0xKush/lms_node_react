import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiEye, FiEyeOff } from 'react-icons/fi';

import PublicLayout from '../../layouts/PublicLayout';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { FormField } from '../../components/form/FormField';

import { useToast } from '../../components/toast/useToast';
import { useLoader } from '../../context/LoaderContext';
import { useAuth } from '../../context/AuthContext';
import { validators } from '../../utils/validation';
import { useFormValidator } from '../../hooks/useFormValidator';

export default function Login() {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const { showLoader, hideLoader } = useLoader();
  const { login } = useAuth();

  const [showPass, setShowPass] = useState(false);

  useEffect(() => {
    document.title = 'Login — LMS Admin';
  }, []);

  const { values, errors, handleChange, validateForm } = useFormValidator(
    { email: '', password: '' },
    {
      email: [validators.email],
      password: [validators.min(6)],
    },
  );

  const handleLogin = async () => {
    if (!validateForm()) return;

    try {
      showLoader();
      await login(values.email, values.password);
      showToast('Login successful', 'success');
      navigate('/dashboard', { replace: true });
    } catch (err) {
      showToast(err instanceof Error ? err.message : 'Login failed. Please try again.', 'error');
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
              LMS <span className="text-blue-600">Admin</span>
            </h2>
            <p className="text-sm text-gray-500 mt-1">Sign in to your dashboard</p>
          </div>

          {/* Form */}
          <div className="space-y-5">
            {/* Email */}
            <FormField label="Email" required error={errors.email}>
              <Input
                type="email"
                value={values.email}
                onChange={handleChange('email')}
                placeholder="admin@example.com"
                error={errors.email}
              />
            </FormField>

            {/* Password */}
            <FormField label="Password" required error={errors.password}>
              <Input
                type={showPass ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                placeholder="••••••••"
                error={errors.password}
                rightIcon={
                  <button
                    type="button"
                    onClick={() => setShowPass((v) => !v)}
                    className="hover:text-gray-600"
                  >
                    {showPass ? <FiEyeOff /> : <FiEye />}
                  </button>
                }
              />
            </FormField>

            {/* Action */}
            <Button className="w-full mt-2" onClick={handleLogin}>
              Sign In
            </Button>

            {/* Links */}
            <div className="flex justify-between text-sm pt-2 text-gray-600">
              <Link to="/forgot" className="font-medium text-blue-600 hover:text-blue-700">
                Forgot password?
              </Link>
              <Link to="/register" className="font-medium text-blue-600 hover:text-blue-700">
                Create account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
