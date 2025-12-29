"use client";

import { forwardRef, ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { Spinner } from "./spinner";

type ButtonVariant = "primary" | "secondary" | "outline" | "text";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "size" | "children"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  fullWidth?: boolean;
  children?: ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-secondary text-white hover:bg-secondary-hover border-transparent",
  secondary:
    "bg-primary text-white hover:bg-primary-dark border-transparent",
  outline:
    "bg-transparent text-primary border-primary hover:bg-primary hover:text-white",
  text:
    "bg-transparent text-primary hover:text-primary-dark border-transparent underline hover:no-underline p-0",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-body-sm",
  md: "px-6 py-3 text-body",
  lg: "px-8 py-4 text-body-lg",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      isLoading = false,
      fullWidth = false,
      disabled,
      children,
      className = "",
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || isLoading;
    const isTextVariant = variant === "text";

    const baseStyles = isTextVariant
      ? "font-medium transition-colors duration-200"
      : "font-medium rounded-none border transition-colors duration-200 inline-flex items-center justify-center gap-2";

    const widthStyles = fullWidth ? "w-full" : "";
    const disabledStyles = isDisabled ? "opacity-50 cursor-not-allowed" : "";

    return (
      <motion.button
        ref={ref}
        whileTap={isDisabled ? undefined : { scale: 0.98 }}
        className={`${baseStyles} ${variantStyles[variant]} ${isTextVariant ? "" : sizeStyles[size]} ${widthStyles} ${disabledStyles} ${className}`}
        disabled={isDisabled}
        {...props}
      >
        {isLoading && <Spinner size="sm" />}
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
