import { MenuItemType } from "@/types/components/menu-item.type";
import Link from "next/link";
import { FC } from "react";

export const MenuItem: FC<MenuItemType> = ({ title, href, Icon }) => {
    return <Link href={href} className="duration-200 hover:text-amber-500">
        <Icon className="sm:hidden text-2xl"/>
        <p className="uppercase hidden sm:inline">{title}</p>
    </Link>
}