import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import PublicLayout from '../../layouts/PublicLayout';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { FormField } from '../../components/form/FormField';

import { validators } from '../../utils/validation';
import { useFormValidator } from '../../hooks/useFormValidator';

export default function Register() {
  useEffect(() => {
    document.title = 'Register — LMS Admin';
  }, []);

  const { values, errors, handleChange, validateForm } = useFormValidator(
    {
      name: '',
      email: '',
      password: '',
    },
    {
      name: [validators.min(3)],
      email: [validators.email],
      password: [validators.min(6)],
    },
  );

  const handleRegister = () => {
    if (!validateForm()) return;
    console.log('Form valid — submit', values);
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
              Create <span className="text-blue-600">Account</span>
            </h2>
            <p className="text-sm text-gray-500 mt-1">Join the LMS admin dashboard</p>
          </div>

          {/* Form */}
          <div className="space-y-5">
            <FormField label="Full Name" required error={errors.name}>
              <Input
                value={values.name}
                onChange={handleChange('name')}
                placeholder="John Doe"
                error={errors.name}
              />
            </FormField>

            <FormField label="Email" required error={errors.email}>
              <Input
                type="email"
                value={values.email}
                onChange={handleChange('email')}
                placeholder="admin@example.com"
                error={errors.email}
              />
            </FormField>

            <FormField label="Password" required error={errors.password}>
              <Input
                type="password"
                value={values.password}
                onChange={handleChange('password')}
                placeholder="••••••••"
                error={errors.password}
              />
            </FormField>

            {/* Action */}
            <Button className="w-full mt-2" onClick={handleRegister}>
              Create Account
            </Button>

            {/* Login link */}
            <p className="text-center text-sm text-gray-600 pt-2">
              Already have an account?{' '}
              <Link to="/" className="font-medium text-blue-600 hover:text-blue-700">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
