import { cn } from "../../utils/cn.js";
import { LOCAL_IMAGES } from "../../utils/localImages.js";

export default function Input({ className = "", leftIcon = false, ...props }) {
  return (
    <div className={cn("relative", className)}>
      {leftIcon && (
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
          <img src={LOCAL_IMAGES.searchGrey} />
        </span>
      )}
      <input
        className={cn(
          "w-full rounded-xl border border-slate-200 bg-lightGray px-4 py-2 text-sm outline-none",
          "focus:ring-4 focus:ring-blue-100 focus:border-blue-300",
          leftIcon ? "pl-9" : ""
        )}
        {...props}
      />
    </div>
  );
}
