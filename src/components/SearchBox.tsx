"use client";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";

export const SearchBox: FC = () => {
  const [search, setSearch] = useState<string>("");
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search.trim()) {
      router.push(`/search/${search}`);
      setSearch("");
    }
  };
  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <form
        action=""
        className="flex items-center justify-between"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Search for movies..."
          className="w-full max-w-md p-2 bg-transparent outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button disabled={!search} className="cursor-pointer">
          Search
        </button>
      </form>
    </div>
  );
};
