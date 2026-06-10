// src/app/services/application-programming/project-implementation/Text.tsx

import React from "react";

// ==========================================
// TYPOGRAPHY CONFIGURATION MODULE (LIGHT THEME)
// ==========================================

export type TextVariant =
  | "display"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "body"
  | "label"
  | "code";

interface TextProps {
  variant: TextVariant;
  children: React.ReactNode;
  className?: string;
}

export function Text({
  variant,
  children,
  className = "",
}: TextProps) {
  const styles: Record<TextVariant, string> = {
    display:
      "text-5xl md:text-8xl font-[900] tracking-tighter leading-[0.9] text-zinc-950",

    h1: "text-4xl md:text-6xl font-extrabold tracking-tight text-zinc-950",

    h2: "text-2xl md:text-4xl font-bold tracking-tight text-zinc-900",

    h3: "text-xl md:text-3xl font-bold tracking-tight text-zinc-900",

    h4: "text-lg md:text-2xl font-semibold tracking-tight text-zinc-900",

    h5: "text-base md:text-xl font-semibold tracking-tight text-zinc-800",

    body: "text-base md:text-lg text-zinc-600 leading-relaxed",

    label:
      "font-mono text-xs uppercase tracking-[0.4em] text-emerald-600 font-bold",

    code:
      "font-mono text-sm bg-zinc-200/60 text-emerald-700 px-2 py-0.5 rounded border border-zinc-300/50",
  };

  const Tag =
    variant === "display" || variant === "h1"
      ? "h1"
      : variant === "h2"
      ? "h2"
      : variant === "h3"
      ? "h3"
      : variant === "h4"
      ? "h4"
      : variant === "h5"
      ? "h5"
      : "p";

  return (
    <Tag className={`${styles[variant]} ${className}`}>
      {children}
    </Tag>
  );
}

// ==========================================
// INTERACTIVE COMPONENT BUTTON SYSTEM
// ==========================================

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost";

export type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-bold transition-all duration-300 active:scale-95 rounded-xl disabled:opacity-50 disabled:pointer-events-none";

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-emerald-600 text-white hover:bg-emerald-500 shadow-[0_4px_20px_rgba(16,185,129,0.15)] hover:shadow-[0_4px_30px_rgba(16,185,129,0.3)]",

    secondary:
      "bg-zinc-900 text-white hover:bg-zinc-800 border border-zinc-800",

    outline:
      "border-2 border-emerald-600/50 text-emerald-600 hover:bg-emerald-600/5",

    ghost:
      "text-zinc-600 hover:text-emerald-600 hover:bg-emerald-600/5",
  };

  const sizes: Record<ButtonSize, string> = {
    sm: "px-4 py-2 text-sm",
    md: "px-8 py-3.5 text-base",
    lg: "px-10 py-5 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Text;