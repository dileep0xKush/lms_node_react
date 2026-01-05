import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import type { ReactNode } from "react";

import { loginApi, logoutApi, meApi } from "../services/authService";
import type { ApiUser } from "../types/auth";

// App-level user shape
type User = {
  id: string;
  name: string;
  email: string;
  role?: string;
};

type AuthContextType = {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  checkAuth: (withLoading?: boolean) => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const initialized = useRef(false);

  const mapApiUser = (u: ApiUser): User => ({
    id: u._id,
    name: u.name,
    email: u.email,
    role: u.role,
  });

  const checkAuth = useCallback(async (withLoading = true) => {
    try {
      if (withLoading) setIsLoading(true);

      const res = await meApi();
      const apiUser = res?.data?.user ?? null;

      setUser(apiUser ? mapApiUser(apiUser) : null);
    } catch (err) {
      console.error("Auth check failed:", err);
      setUser(null);
    } finally {
      if (withLoading) setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    checkAuth();
  }, [checkAuth]);

  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true);

      await loginApi(email, password);
      await checkAuth(false);
    } catch (err) {
      console.error("Login failed:", err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      setIsLoading(true);
      await logoutApi();
      setUser(null);
    } catch (err) {
      console.error("Logout failed:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx;
}
