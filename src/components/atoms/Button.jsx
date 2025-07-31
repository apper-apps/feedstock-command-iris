import React from "react";
import { cn } from "@/utils/cn";
import ApperIcon from "@/components/ApperIcon";

const Button = React.forwardRef(({ 
  className, 
  variant = "primary", 
  size = "md", 
  icon,
  iconPosition = "left",
  loading = false,
  children, 
  ...props 
}, ref) => {
  const variants = {
    primary: "bg-gradient-to-r from-forest-500 to-forest-600 hover:from-forest-600 hover:to-forest-700 text-white shadow-soft",
    secondary: "bg-gradient-to-r from-burlap-100 to-burlap-200 hover:from-burlap-200 hover:to-burlap-300 text-brown-800 border border-burlap-300",
    outline: "border-2 border-forest-500 text-forest-600 hover:bg-forest-50 hover:border-forest-600",
    ghost: "text-brown-700 hover:bg-burlap-100",
    danger: "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
    xl: "px-8 py-4 text-xl"
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none",
        variants[variant],
        sizes[size],
        className
      )}
      ref={ref}
      disabled={loading}
      {...props}
    >
      {loading && <ApperIcon name="Loader2" size={18} className="mr-2 animate-spin" />}
      {!loading && icon && iconPosition === "left" && (
        <ApperIcon name={icon} size={18} className="mr-2" />
      )}
      {children}
      {!loading && icon && iconPosition === "right" && (
        <ApperIcon name={icon} size={18} className="ml-2" />
      )}
    </button>
  );
});

Button.displayName = "Button";

export default Button;