import { cn } from "../../utils/cn.js";

export default function Card({ className = "", children }) {
  return (
    <div className={cn("bg-white rounded-2xl shadow-soft border border-slate-200", className)}>
      {children}
    </div>
  );
}
