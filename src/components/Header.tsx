import { FC } from "react";
import { MenuItem } from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs"
import { Logo } from "./Logo";

export const HeaderSection: FC = () => {
  return (
    <header className="flex items-center justify-between p-3 max-w-6xl mx-auto">
      <div className="flex items-center gap-6">
        <MenuItem title="home" href="/" Icon={AiFillHome} />
        <MenuItem title="about" href="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div>
        <Logo />
      </div>
    </header>
  );
};
