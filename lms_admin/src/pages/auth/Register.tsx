import PublicLayout from "../../layouts/PublicLayout";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useEffect } from "react";
export default function Register() {
  useEffect(() => {
    document.title = "Register — LMS Admin";
  }, []);

  return (
    <PublicLayout>
      <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/app_bg_image.avif')",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Register Card */}
        <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/40 p-6 sm:p-8 w-[95%] max-w-md">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-extrabold tracking-wide">
              Create Account
            </h2>
            <p className="text-gray-500 text-sm">
              Join the LMS admin dashboard
            </p>
          </div>

          <div className="space-y-4">
            <Input label="Full Name" />
            <Input label="Email" type="email" />
            <Input label="Password" type="password" />

            <Button className="w-full mt-1">Register</Button>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
