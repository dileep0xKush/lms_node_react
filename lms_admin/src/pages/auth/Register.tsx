import { useEffect } from 'react';
import PublicLayout from '../../layouts/PublicLayout';
import Input from '../../components/Input';
import Button from '../../components/Button';
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
      <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/app_bg_image.avif')" }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/40 p-6 sm:p-8 w-[95%] max-w-md">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-extrabold tracking-wide">Create Account</h2>
            <p className="text-gray-500 text-sm">Join the LMS admin dashboard</p>
          </div>

          <div className="space-y-4">
            <Input
              label="Full Name"
              value={values.name}
              onChange={handleChange('name')}
              error={errors.name}
            />

            <Input
              label="Email"
              type="email"
              value={values.email}
              onChange={handleChange('email')}
              error={errors.email}
            />

            <Input
              label="Password"
              type="password"
              value={values.password}
              onChange={handleChange('password')}
              error={errors.password}
            />

            <Button className="w-full mt-1" onClick={handleRegister}>
              Register
            </Button>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
