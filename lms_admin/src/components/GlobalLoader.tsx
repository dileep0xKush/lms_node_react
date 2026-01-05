import { useLoader } from "../context/LoaderContext";

export default function GlobalLoader() {
  const { loading } = useLoader();

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[9999]">
      <div className="bg-white/90 rounded-xl shadow-xl px-6 py-6 flex flex-col items-center gap-3">
        <span className="w-10 h-10 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin" />
        <p className="text-sm font-medium text-gray-700">Please wait…</p>
      </div>
    </div>
  );
}
