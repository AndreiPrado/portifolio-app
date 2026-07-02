import type { ReactNode } from "react";

// html and body are provided by app/[locale]/layout.tsx
export default function RootLayout({ children }: { children: ReactNode }): ReactNode {
  return children;
}
