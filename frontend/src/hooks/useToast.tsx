// hooks/useToast.tsx
import { toast, Slide, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CheckCircle2, XCircle, Info, AlertTriangle } from "lucide-react";

const defaultConfig: ToastOptions = {
  position: "top-right",
  autoClose: 1700,
  hideProgressBar: false,
  pauseOnHover: true,
  closeOnClick: true,
  draggable: true,
  transition: Slide,
  progressClassName: "!bg-gradient-to-r from-cyan-300 via-cyan-600 to-blue-500",
  className:
    "!bg-white text-black font-medium rounded-xl shadow-lg border border-gray-100",
};

// helper: toast message with icon
const withIcon = (Icon: React.ElementType, message: string, color: string) => (
  <div className="flex items-center gap-2">
    <Icon className={`w-5 h-5 ${color}`} strokeWidth={2.3} />
    <span>{message}</span>
  </div>
);

type ToastParams = {
  message: string;
  options?: ToastOptions;
};
export const useToast = () => {
  const success = ({ message, options }: ToastParams) =>
    toast.success(withIcon(CheckCircle2, message, "text-green-500"), {
      ...defaultConfig,
      ...options,
    });

  const error = ({ message, options }: ToastParams) =>
    toast.error(withIcon(XCircle, message, "text-red-500"), {
      ...defaultConfig,
      ...options,
    });

  const info = ({ message, options }: ToastParams) =>
    toast.info(withIcon(Info, message, "text-blue-500"), {
      ...defaultConfig,
      ...options,
    });

  const warning = ({ message, options }: ToastParams) =>
    toast.warning(withIcon(AlertTriangle, message, "text-yellow-500"), {
      ...defaultConfig,
      ...options,
    });

  // ✅ Persistent loading toast
  const loading = ({ message, options }: ToastParams) => {
    return toast.loading(withIcon(Info, message, "text-blue-500"), {
      ...defaultConfig,
      autoClose: false, // stays on screen
      closeOnClick: false,
      draggable: false,
      ...options,
    });
  };

  // ✅ Update existing toast (success/error) by toastId
  const update = (toastId: string | number, params: { type: "success" | "error" | "info" | "warning"; message: string; options?: ToastOptions; }) => {
    const { type, message, options } = params;

    const IconMap = {
      success: CheckCircle2,
      error: XCircle,
      info: Info,
      warning: AlertTriangle,
    };

    toast.update(toastId, {
      render: withIcon(IconMap[type], message, type === "success" ? "text-green-500" : type === "error" ? "text-red-500" : type === "info" ? "text-blue-500" : "text-yellow-500"),
      type,
      isLoading: false,
      autoClose: 3000,
      closeOnClick: true,
      draggable: true,
      ...options,
    });
  };

  return { success, error, info, warning, loading, update };
};