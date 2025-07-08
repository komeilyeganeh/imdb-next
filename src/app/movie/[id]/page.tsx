import { MovieItemType } from "@/types/components/movie-item.type";
import Image from "next/image";
import { FiThumbsUp } from "react-icons/fi";

export default async function MovieDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const movieId = params.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}&language=en-US`,
    {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    }
  );
  const movie: MovieItemType = await res.json();
  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="w-full">
      <div className="max-w-6xl mx-auto p-4 flex flex-col lg:flex-row items-start gap-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          width={500}
          height={300}
          alt="movie image"
          className="rounded-lg"
        />
        <div>
          <h2 className="text-2xl font-bold">{movie.title}</h2>
          <p className="text-gray-400 mt-2">{movie.overview}</p>
          <div className="flex items-center justify-between mt-4">
            <p className="text-sm">{movie.release_date}</p>
            <p className="flex items-center gap-1 text-sm">
              <FiThumbsUp /> {movie.vote_count}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
