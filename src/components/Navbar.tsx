import { FC } from "react";
import { NavbarItem } from "./NavbarItem";

export const Navbar: FC = () => {
  return (
    <div className="flex items-center justify-center gap-8 bg-amber-100 dark:bg-gray-600 p-3">
      <NavbarItem title="Trending" param="fetchTrending"/>
      <NavbarItem title="Top Rated" param="fetchTopRated"/>
    </div>
  );
};
