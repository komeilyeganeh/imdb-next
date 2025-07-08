import { FC } from "react";
import { Card } from "./Card";
import { MovieItemType } from "@/types/components/movie-item.type";

export const Movies: FC<{ results: MovieItemType[] }> = ({ results }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-6xl mx-auto py-4 gap-2">
      {results.map((movie: any) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
