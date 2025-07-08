import { FC } from "react";
import { MovieItemType } from "@/types/components/movie-item.type";
import Image from "next/image";
import Link from "next/link";
import { FiThumbsUp } from "react-icons/fi";

export const Card: FC<{ movie: MovieItemType }> = ({ movie }) => {
  return (
    <div className="bg-gray-100 dark:bg-transparent dark:border-2 dark:border-gray-600 p-2 flex flex-col gap-2 rounded-lg">
      <Link href={`/movie/${movie.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          width={500}
          height={300}
          alt="movie image"
          className="rounded-md"
        />
        <div className="p-1">
          <p className="line-clamp-1">{movie.overview}</p>
          <h2 className="text-lg font-bold truncate">{movie.title}</h2>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-400">{movie.release_date}</p>
          <p className="flex items-center gap-1 text-sm text-gray-400">
            <FiThumbsUp /> {movie.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
};
