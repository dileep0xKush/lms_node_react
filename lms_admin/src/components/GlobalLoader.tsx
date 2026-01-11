import { useLoader } from '../context/LoaderContext';

export default function GlobalLoader() {
  const { loading } = useLoader();

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div
        className="
          flex flex-col items-center gap-4
          rounded-2xl bg-white/95 px-8 py-7
          shadow-2xl border border-white/40
          animate-in fade-in zoom-in-95
        "
      >
        {/* Spinner */}
        <span
          className="
            h-10 w-10
            rounded-full border-2
            border-gray-300 border-t-blue-600
            animate-spin
          "
        />

        {/* Text */}
        <p className="text-sm font-medium text-gray-700 tracking-wide">Please wait…</p>
      </div>
    </div>
  );
}
