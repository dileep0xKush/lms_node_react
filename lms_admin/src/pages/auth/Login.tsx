import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PublicLayout from "../../layouts/PublicLayout";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { loginApi } from "../../services/authService";
import { useToast } from "../../components/toast/useToast";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useLoader } from "../../context/LoaderContext";

export default function Login() {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const { showLoader, hideLoader } = useLoader();

  useEffect(() => {
    document.title = "Login — LMS Admin";
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleLogin = async () => {
    try {
      showLoader();

      const res = await loginApi(email, password);
      sessionStorage.setItem("user", JSON.stringify(res.user));

      showToast("Login successful", "success");
      navigate("/dashboard");
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Login failed. Please try again.";
      showToast(message, "error");
    } finally {
      hideLoader(); // 🔹 global loader OFF
    }
  };

  return (
    <PublicLayout>
      <div className="relative w-full min-h-screen flex items-center justify-center">
        <div
          className="fixed inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/app_bg_image.avif')" }}
        />
        <div className="fixed inset-0 bg-black/60" />

        <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/40 p-6 sm:p-8 w-[95%] max-w-md">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-extrabold tracking-wide">
              LMS <span className="text-blue-600">Admin</span>
            </h2>
            <p className="text-gray-500 text-sm">Sign in to your dashboard</p>
          </div>

          <div className="space-y-4">
            <Input
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              label="Password"
              type={showPass ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              rightIcon={
                showPass ? (
                  <FiEyeOff onClick={() => setShowPass(false)} />
                ) : (
                  <FiEye onClick={() => setShowPass(true)} />
                )
              }
            />

            <Button className="w-full mt-1" onClick={handleLogin}>
              Sign In
            </Button>

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
