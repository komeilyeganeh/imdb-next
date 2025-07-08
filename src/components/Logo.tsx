import { FC } from "react";

export const Logo: FC = () => {
  return (
    <div className="p-1 rounded-lg bg-amber-500 text-white flex items-center gap-2">
      <span className="text-2xl font-bold">IMDb</span>
      <span className="hidden sm:inline text-xl">Clone</span>
    </div>
  );
};
