import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Button from "../../components/Button";

export default function ErrorPage() {
  const error = useRouteError();

  let code = 500;
  let title = "Something went wrong";
  let message = "An unexpected error occurred.";

  if (isRouteErrorResponse(error)) {
    code = error.status;

    if (code === 404) {
      title = "Page Not Found";
      message = "Sorry, the page you’re looking for doesn’t exist.";
    }

    if (code === 403) {
      title = "Access Denied";
      message = "You don’t have permission to view this page.";
    }

    if (code === 500) {
      title = "Internal Server Error";
      message = "We’re working to fix this issue.";
    }
  }

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/app_bg_image.avif')",
        }}
      />

      <div className="absolute inset-0 bg-black/60" />

      {/* Card */}
      <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/40 p-8 w-[95%] max-w-md text-center">
        <h1 className="text-6xl font-extrabold text-blue-600">{code}</h1>

        <h2 className="text-2xl font-bold mt-2">{title}</h2>

        <p className="text-gray-600 mt-2">{message}</p>

        <div className="mt-6 flex gap-3 justify-center">
          <Button onClick={() => window.history.back()}>Go Back</Button>

          <Button
            className="bg-gray-800 hover:bg-black text-white"
            onClick={() => (window.location.href = "/")}
          >
            Go Home
          </Button>
        </div>
      </div>
    </div>
  );
}
