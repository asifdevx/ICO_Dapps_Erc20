import { InputProps } from "@/types";
import { cn } from "@/utils/cn";
import React from "react";

const Input = ({
  placeholder,
  type,
  inputClass,
  iconClass,
  position,
  icon,
  value,
  handleChange,
  onFocus,
  onBlur
}: InputProps) => {
  return (
    <div className="relative w-full">
      <input
        placeholder={placeholder}
        type={type}
        className={cn(
          // Base layout
          "w-full outline-none p-2 rounded-md transition-colors duration-200",

          // Background and text colors for dark/light themes
          "bg-gray-100 dark:bg-neutral-900 text-gray-900 dark:text-gray-100",

          // Placeholder colors for both modes
          "placeholder:text-gray-500 dark:placeholder:text-gray-400",

          // Smooth theme transition
          "focus:bg-gray-200 dark:focus:bg-neutral-800",

          // Text sizing
          "xl:placeholder:text-[15px] placeholder:text-[13px]",

          // Allow user overrides
          inputClass
        )}
        onChange={handleChange}
        onWheel={(e) => e.currentTarget.blur()}
        value={value}
        onFocus={onFocus}
        onBlur={onBlur}
      />

      {icon && (
        <div
          className={cn(
            "absolute top-1/2 -translate-y-1/2",
            position === "left" ? "left-3" : "right-3",
            iconClass
          )}
        >
          {icon}
        </div>
      )}
    </div>
  );
};

export default React.memo(Input);
