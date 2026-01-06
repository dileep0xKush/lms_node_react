import { useLocation, Link } from 'react-router-dom';

export default function QuizResultPage() {
  const location = useLocation();
  const { score = 0, total = 0 } = location.state || {};

  const percentage = Math.round((score / total) * 100);
  const passed = percentage >= 60;

  return (
    <section className="bg-slate-50 min-h-screen flex items-center justify-center px-6">
      <div className="bg-white max-w-xl w-full rounded-2xl shadow-md p-10 text-center">
        {/* Status */}
        <div
          className={`mx-auto w-24 h-24 rounded-full flex items-center justify-center text-3xl font-bold ${
            passed ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'
          }`}
        >
          {percentage}%
        </div>

        <h1 className="text-2xl font-extrabold text-slate-900 mt-6">
          {passed ? 'Congratulations 🎉' : 'Better luck next time'}
        </h1>

        <p className="text-slate-600 mt-2">
          You scored {score} out of {total}
        </p>

        {/* Message */}
        <p className="mt-4 text-sm text-slate-500">
          {passed
            ? 'You have successfully passed the quiz.'
            : 'You need at least 60% to pass. Try again!'}
        </p>

        {/* Actions */}
        <div className="mt-8 flex justify-center gap-4">
          {!passed && (
            <Link
              to="/quiz"
              className="px-6 py-3 rounded-lg border border-slate-300 text-slate-700 hover:border-purple-700 hover:text-purple-700"
            >
              Retake Quiz
            </Link>
          )}

          <Link
            to="/dashboard"
            className="px-6 py-3 rounded-lg bg-purple-700 text-white font-semibold hover:bg-purple-800"
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
    </section>
  );
}
