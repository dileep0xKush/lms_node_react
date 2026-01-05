import { useState, useRef, useEffect } from "react";
import {
  FiBell,
  FiSearch,
  FiChevronDown,
  FiClock,
  FiMenu,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { logoutApi } from "../../services/authService";
import { useToast } from "../toast/useToast";
import { useLoader } from "../../context/LoaderContext";

export default function Header({ onMenuClick }: { onMenuClick: () => void }) {
  const [openProfile, setOpenProfile] = useState(false);
  const [openNotif, setOpenNotif] = useState(false);

  const notifRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();
  const { showToast } = useToast();
  const { showLoader, hideLoader } = useLoader();

  const notifications = [
    { id: 1, text: "New user registered", time: "2m ago" },
    { id: 2, text: "Course purchase completed", time: "10m ago" },
    { id: 3, text: "Server restarted successfully", time: "1h ago" },
  ];

  const handleLogout = async () => {
    try {
      showLoader();

      await logoutApi();
      sessionStorage.removeItem("user");

      showToast("Logged out successfully", "success");
      navigate("/");
    } catch (err) {
      const message = err instanceof Error ? err.message : "Logout failed";
      showToast(message, "error");
    } finally {
      hideLoader();
    }
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (notifRef.current && !notifRef.current.contains(e.target as Node)) {
        setOpenNotif(false);
      }
      if (
        profileRef.current &&
        !profileRef.current.contains(e.target as Node)
      ) {
        setOpenProfile(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="h-16 bg-white/80 backdrop-blur border-b border-gray-200 flex items-center justify-between px-3 md:px-6">
      {/* Left */}
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="md:hidden p-2 rounded-xl hover:bg-gray-100 active:scale-[.97] transition"
        >
          <FiMenu className="text-gray-700 text-xl" />
        </button>

        {/* Search */}
        <div className="hidden sm:flex items-center gap-2 bg-gray-100/80 rounded-2xl px-3 py-2 w-56 md:w-80 border border-gray-200 focus-within:ring-2 focus-within:ring-blue-500">
          <FiSearch className="text-gray-500" />
          <input
            className="bg-transparent outline-none text-sm w-full"
            placeholder="Search anything…"
          />
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2 md:gap-3">
        {/* Notifications */}
        <div className="relative" ref={notifRef}>
          <button
            onClick={() => {
              setOpenNotif(!openNotif);
              setOpenProfile(false);
            }}
            className="p-2 rounded-xl hover:bg-gray-100 active:scale-[.97] transition relative"
          >
            <FiBell className="text-gray-700" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-blue-500 rounded-full ring-2 ring-white" />
          </button>

          {openNotif && (
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

        {/* Profile */}
        <div className="relative" ref={profileRef}>
          <button
            onClick={() => {
              setOpenProfile(!openProfile);
              setOpenNotif(false);
            }}
            className="flex items-center gap-2 px-2 py-1.5 rounded-xl hover:bg-gray-100 active:scale-[.97] transition"
          >
            <img
              src="https://i.pravatar.cc/40"
              className="w-8 h-8 rounded-full border border-gray-200"
            />
            <FiChevronDown className="text-gray-500 text-sm hidden sm:block" />
          </button>

          {openProfile && (
            <div className="absolute right-0 mt-3 w-48 bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden">
              <div className="px-4 py-3 border-b">
                <p className="text-sm font-semibold">John Doe</p>
                <p className="text-xs text-gray-500">Admin</p>
              </div>

              <ul className="text-sm">
                <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer">
                  Profile
                </li>
                <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer">
                  Settings
                </li>

                {/* 🔹 Logout */}
                <li
                  className="px-4 py-2 text-red-500 hover:bg-red-50 cursor-pointer"
                  onClick={handleLogout}
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
