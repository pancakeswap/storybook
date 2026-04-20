import { createContext, useCallback, useContext, useMemo, type ReactNode } from "react";
import { toast as sonnerToast } from "sonner";
import { Toast } from "./Toast";
import type { ToastContextApi, ToastData } from "./types";
import { types } from "./types";

const ToastsContext = createContext<ToastContextApi | undefined>(undefined);

function makeToast(type: ToastData["type"]) {
  return (title: string, description?: ReactNode) => {
    return sonnerToast.custom((t) => (
      <Toast
        toast={{ id: t, title, description, type }}
        onRemove={() => sonnerToast.dismiss(t)}
      />
    ));
  };
}

export const ToastsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const toastError = useCallback(makeToast(types.DANGER), []);
  const toastInfo = useCallback(makeToast(types.INFO), []);
  const toastSuccess = useCallback(makeToast(types.SUCCESS), []);
  const toastWarning = useCallback(makeToast(types.WARNING), []);

  const clear = useCallback(() => sonnerToast.dismiss(), []);
  const remove = useCallback((id: string | number) => sonnerToast.dismiss(id), []);

  const value = useMemo(
    () => ({ clear, remove, toastError, toastInfo, toastSuccess, toastWarning }),
    [clear, remove, toastError, toastInfo, toastSuccess, toastWarning]
  );

  return <ToastsContext.Provider value={value}>{children}</ToastsContext.Provider>;
};

export const useToast = () => {
  const ctx = useContext(ToastsContext);
  if (!ctx) throw new Error("useToast must be used within ToastsProvider");
  return ctx;
};
