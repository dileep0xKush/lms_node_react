import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

type LoaderContextType = {
  loading: boolean;
  showLoader: () => void;
  hideLoader: () => void;
};

const LoaderContext = createContext<LoaderContextType | undefined>(undefined);

type LoaderProviderProps = {
  children: ReactNode;
};

export function LoaderProvider({ children }: LoaderProviderProps) {
  const [loading, setLoading] = useState(false);

  const showLoader = () => setLoading(true);
  const hideLoader = () => setLoading(false);

  return (
    <LoaderContext.Provider value={{ loading, showLoader, hideLoader }}>
      {children}
    </LoaderContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLoader(): LoaderContextType {
  const context = useContext(LoaderContext);
  if (!context) {
    throw new Error('useLoader must be used inside LoaderProvider');
  }
  return context;
}
