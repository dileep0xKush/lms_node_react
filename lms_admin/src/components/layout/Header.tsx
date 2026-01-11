import { useState, useRef, useEffect } from 'react';
import { FiSearch, FiChevronDown, FiMenu } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../toast/useToast';
import { useLoader } from '../../context/LoaderContext';
import { useAuth } from '../../context/AuthContext';

import NotificationDropdown from '../notifications/NotificationDropdown';

export default function Header({ onMenuClick }: { onMenuClick: () => void }) {
  const [openProfile, setOpenProfile] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();
  const { showToast } = useToast();
  const { showLoader, hideLoader } = useLoader();
  const { logout, user } = useAuth();

  const notifications = [
    { id: 1, text: 'New user registered', time: '2m ago' },
    { id: 2, text: 'Course purchase completed', time: '10m ago' },
    { id: 3, text: 'Server restarted successfully', time: '1h ago' },
  ];

  const handleLogout = async () => {
    try {
      showLoader();
      await logout();
      showToast('Logged out successfully', 'success');
      navigate('/', { replace: true });
    } catch (err) {
      showToast(err instanceof Error ? err.message : 'Logout failed', 'error');
    } finally {
      hideLoader();
    }
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setOpenProfile(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-40 h-16 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="h-full flex items-center justify-between px-4 md:px-6">
        {/* Left */}
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuClick}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 active:scale-95 transition"
            aria-label="Open menu"
          >
            <FiMenu className="text-gray-700 text-xl" />
          </button>

          {/* Search */}
          <div className="hidden sm:flex items-center gap-2 bg-gray-100 rounded-xl px-3 py-2 w-56 md:w-80 border border-gray-200 focus-within:ring-2 focus-within:ring-blue-500">
            <FiSearch className="text-gray-500" />
            <input
              className="bg-transparent outline-none text-sm w-full placeholder:text-gray-400"
              placeholder="Search…"
            />
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Notifications */}
          <NotificationDropdown notifications={notifications} />

          {/* Profile */}
          <div className="relative" ref={profileRef}>
            <button
              onClick={() => setOpenProfile((v) => !v)}
              className="flex items-center gap-2 px-2 py-1.5 rounded-xl hover:bg-gray-100 active:scale-95 transition"
              aria-haspopup="menu"
              aria-expanded={openProfile}
            >
              <img
                src="https://i.pravatar.cc/40"
                alt="User avatar"
                className="w-8 h-8 rounded-full border border-gray-200 object-cover"
              />
              <FiChevronDown className="text-gray-500 text-sm hidden sm:block" />
            </button>

            {openProfile && (
              <div className="absolute right-0 mt-3 w-52 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
                {/* User info */}
                <div className="px-4 py-3 border-b">
                  <p className="text-sm font-medium text-gray-800 truncate">{user?.name}</p>
                  <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                </div>

                {/* Actions */}
                <ul className="text-sm">
                  <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer">Profile</li>
                  <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer">Settings</li>
                  <li
                    className="px-4 py-2 text-red-600 hover:bg-red-50 cursor-pointer"
                    onClick={handleLogout}
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
