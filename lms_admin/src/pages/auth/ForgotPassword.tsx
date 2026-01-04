import PublicLayout from "../../layouts/PublicLayout";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useEffect } from "react";

export default function ForgotPassword() {
  useEffect(() => {
    document.title = "Forgot Password — LMS Admin";
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

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Card */}
        <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/40 p-6 sm:p-8 w-[95%] max-w-md">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-extrabold tracking-wide">
              Reset Password
            </h2>
            <p className="text-gray-500 text-sm">
              Enter your email to receive reset instructions
            </p>
          </div>

          <div className="space-y-4">
            <Input label="Email" type="email" />

            <Button className="w-full mt-1">Send Reset Link</Button>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
