import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ToastProvider from "./components/toast/ToastProvider";
import { LoaderProvider } from "./context/LoaderContext";
import GlobalLoader from "./components/GlobalLoader";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LoaderProvider>
      <ToastProvider>
        
        <App />
        <GlobalLoader />
      </ToastProvider>
    </LoaderProvider>
  </StrictMode>
);
