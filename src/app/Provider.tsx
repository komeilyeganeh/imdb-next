"use client";

import { ThemeProvider } from "next-themes";

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <div>{children}</div>
    </ThemeProvider>
  );
};
