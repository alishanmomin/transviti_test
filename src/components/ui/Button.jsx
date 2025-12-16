import { cn } from "../../utils/cn.js";

export default function Button({ className = "", children, ...props }) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm ",
        "bg-primary text-white hover:bg-blue-800 hover:scale-105  active:bg-blue-900 transition",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
