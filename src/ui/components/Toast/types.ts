import type { ReactNode } from "react";

export const types = {
  SUCCESS: "success",
  DANGER: "danger",
  WARNING: "warning",
  INFO: "info",
} as const;

export type Types = (typeof types)[keyof typeof types];

export interface ToastData {
  id: string | number;
  type: Types;
  title: string;
  description?: ReactNode;
}

export interface ToastProps {
  toast: ToastData;
  onRemove: (id: string | number) => void;
}

type ToastSignature = (title: string, description?: ReactNode) => string | number;

export interface ToastContextApi {
  clear: () => void;
  remove: (id: string | number) => void;
  toastError: ToastSignature;
  toastInfo: ToastSignature;
  toastSuccess: ToastSignature;
  toastWarning: ToastSignature;
}
