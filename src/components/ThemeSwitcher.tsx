"use client";
import { FC, useEffect, useState } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";

export const ThemeSwitcher: FC = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme === "sysytem" ? systemTheme : theme;
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div className="cursor-pointer">
      {mounted && currentTheme === "dark" ? (
        <MdLightMode size={24} onClick={() => setTheme("light")} />
      ) : (
        <MdDarkMode size={24} onClick={() => setTheme("dark")} />
      )}
    </div>
  );
};
