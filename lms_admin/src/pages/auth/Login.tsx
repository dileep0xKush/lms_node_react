import PublicLayout from "../../layouts/PublicLayout";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { useEffect } from "react";
export default function Login() {
  useEffect(() => {
    document.title = "Login — LMS Admin";
  }, []);
  return (
    <PublicLayout>
      <div className="relative w-full min-h-screen flex items-center justify-center">
        {/* Full-screen Background Image */}
        <div
          className="fixed inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/app_bg_image.avif')",
          }}
        />

        {/* Overlay */}
        <div className="fixed inset-0 bg-black/60" />

        {/* Auth Card */}
        <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/40 p-6 sm:p-8 w-[95%] max-w-md">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-extrabold tracking-wide">
              LMS <span className="text-blue-600">Admin</span>
            </h2>
            <p className="text-gray-500 text-sm">Sign in to your dashboard</p>
          </div>

          <div className="space-y-4">
            <Input label="Email" type="email" />
            <Input label="Password" type="password" />

            <Button className="w-full mt-1">Sign In</Button>

            <div className="flex justify-between text-sm pt-2 text-gray-600">
              <Link to="/forgot" className="hover:text-blue-600">
                Forgot password?
              </Link>
              <Link to="/register" className="hover:text-blue-600">
                Create account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
