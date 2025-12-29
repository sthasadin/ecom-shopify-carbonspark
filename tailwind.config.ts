import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary - Warm Brown
        primary: {
          DEFAULT: "#8e8b84",
          dark: "#6b6862",
          light: "#a8a59e",
        },
        // Secondary - Black for CTAs
        secondary: {
          DEFAULT: "#000000",
          hover: "#333333",
        },
        // Backgrounds
        background: {
          DEFAULT: "#ffffff",
          warm: "#f8f6f3",
          light: "#f5f5f5",
        },
        // Text Colors
        text: {
          primary: "#1a1a1a",
          secondary: "#6b6862",
          muted: "#9ca3af",
        },
        // Border Colors
        border: {
          DEFAULT: "#e5e5e5",
          dark: "#8e8b84",
        },
        // Status Colors
        success: "#008060",
        error: "#d72c0d",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Custom typography scale
        "display": ["3rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "h1": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "h2": ["1.5rem", { lineHeight: "1.3", letterSpacing: "0" }],
        "h3": ["1.25rem", { lineHeight: "1.4", letterSpacing: "0" }],
        "body-lg": ["1.125rem", { lineHeight: "1.6", letterSpacing: "0" }],
        "body": ["1rem", { lineHeight: "1.6", letterSpacing: "0" }],
        "body-sm": ["0.875rem", { lineHeight: "1.5", letterSpacing: "0" }],
        "caption": ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.02em" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
      },
      borderRadius: {
        // Default to sharp corners
        none: "0",
        sm: "2px",
      },
      boxShadow: {
        "subtle": "0 1px 2px rgba(0,0,0,0.05)",
      },
      transitionDuration: {
        "fast": "150ms",
        "normal": "200ms",
        "slow": "300ms",
      },
    },
  },
  plugins: [],
};

export default config;
