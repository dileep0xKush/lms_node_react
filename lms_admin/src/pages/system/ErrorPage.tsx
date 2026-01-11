import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import { FiAlertTriangle } from 'react-icons/fi';
import Button from '../../components/Button';

export default function ErrorPage() {
  const error = useRouteError();

  let code = 500;
  let title = 'Something went wrong';
  let message = 'An unexpected error occurred. Please try again later.';

  if (isRouteErrorResponse(error)) {
    code = error.status;

    switch (code) {
      case 404:
        title = 'Page Not Found';
        message = 'The page you are looking for doesn’t exist or was moved.';
        break;
      case 403:
        title = 'Access Denied';
        message = 'You don’t have permission to access this page.';
        break;
      case 500:
        title = 'Internal Server Error';
        message = 'Our team is working to fix this issue.';
        break;
    }
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/app_bg_image.avif')" }}
      />
      <div className="absolute inset-0 bg-black/60" />

      {/* Card */}
      <div
        className="
          relative
          w-full max-w-md
          rounded-3xl
          border border-white/30
          bg-white/90 backdrop-blur-xl
          shadow-2xl
          px-8 py-10
          text-center
        "
      >
        {/* Icon */}
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-600">
          <FiAlertTriangle className="text-2xl" />
        </div>

        {/* Code */}
        <h1 className="text-6xl font-extrabold tracking-tight text-blue-600">{code}</h1>

        {/* Title */}
        <h2 className="mt-2 text-2xl font-bold text-gray-900">{title}</h2>

        {/* Message */}
        <p className="mt-3 text-sm leading-relaxed text-gray-600">{message}</p>

        {/* Actions */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
          <Button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto bg-gray-100 text-gray-800 hover:bg-gray-200"
          >
            Go Back
          </Button>

          <Button onClick={() => (window.location.href = '/')} className="w-full sm:w-auto">
            Go Home
          </Button>
        </div>
      </div>
    </div>
  );
}
