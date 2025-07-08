"use client";
import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Something went wrong!</h1>
      <button onClick={() => reset()} className="p-2 bg-amber-500 dark:bg-amber-600 rounded-lg text-white dark:text-black">Try Again</button>
    </div>
  );
}