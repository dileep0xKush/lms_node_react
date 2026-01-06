import { useState, useRef, useEffect } from "react";
import { FiBell, FiClock } from "react-icons/fi";

type Notification = {
  id: number;
  text: string;
  time: string;
};

type Props = {
  notifications: Notification[];
};

export default function NotificationDropdown({ notifications }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // close when clicking outside
  useEffect(() => {
    const handle = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="p-2 rounded-xl hover:bg-gray-100 active:scale-[.97] transition relative"
      >
        <FiBell className="text-gray-700" />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-blue-500 rounded-full ring-2 ring-white" />
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-80 bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden animate-fade-in">
          <div className="px-4 py-3 border-b flex justify-between items-center bg-gray-50/70">
            <span className="font-semibold text-sm">Notifications</span>
            <button className="text-xs text-blue-600 hover:underline">
              Mark all read
            </button>
          </div>

          <ul className="max-h-72 overflow-y-auto">
            {notifications.map((n) => (
              <li
                key={n.id}
                className="px-4 py-3 hover:bg-gray-50 cursor-pointer flex flex-col gap-1 border-b"
              >
                <p className="text-sm font-medium">{n.text}</p>
                <span className="flex items-center gap-1 text-xs text-gray-500">
                  <FiClock /> {n.time}
                </span>
              </li>
            ))}
          </ul>

          <div className="px-4 py-2 text-center text-sm hover:bg-gray-50 cursor-pointer">
            View all
          </div>
        </div>
      )}
    </div>
  );
}
