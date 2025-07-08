"use client";
import { NavbarItemType } from "@/types/components/navbar-item.type";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FC } from "react";

export const NavbarItem: FC<NavbarItemType> = ({ title, param }) => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <div>
      <Link
        href={`/?genre=${param}`}
        className={`hover:text-amber-600 p-1 ${
          param === genre && "border-b-2 border-amber-600 font-bold"
        }`}
      >
        {title}
      </Link>
    </div>
  );
};
