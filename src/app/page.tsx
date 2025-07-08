import { Movies } from "@/components/Movies";

const API_KEY = process.env.API_KEY;

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const genre = searchParams.genre || "fetchTrending";
  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === "fetchTopRated" ? "/movie/top_rated" : "/trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    }
  );
  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return (
    <div>
      <Movies results={data.results} />
    </div>
  );
}
