import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        'space-purple': "var(--space-purple)",
        'space-blue': "var(--space-blue)",
        'space-pink': "var(--space-pink)",
        'space-dark': "var(--space-dark)",
        'space-black': "var(--space-black)",
      },
    },
  },
  plugins: [],
} satisfies Config;
