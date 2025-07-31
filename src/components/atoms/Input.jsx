import React from "react";
import { cn } from "@/utils/cn";

const Input = React.forwardRef(({ 
  className, 
  type = "text",
  label,
  error,
  ...props 
}, ref) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-brown-800">
          {label}
        </label>
      )}
      <input
        type={type}
        className={cn(
          "w-full px-4 py-2.5 border border-burlap-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-forest-500 transition-colors bg-white text-brown-900 placeholder-burlap-400",
          error && "border-red-500 focus:ring-red-500 focus:border-red-500",
          className
        )}
        ref={ref}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
});

Input.displayName = "Input";

export default Input;