import { FC } from "react";

export const Movies: FC<{ results: any }> = ({ results }) => {
  return (
    <div>
      {results.map((movie: any) => (
        <div key={movie.id} className="movie">
          <h2>{movie.original_title}</h2>
        </div>
      ))}
    </div>
  );
};
