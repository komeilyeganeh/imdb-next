import { Movies } from "@/components/Movies";

export default async function SearchPage({
  params,
}: {
  params: { searchTerm: string };
}) {
  const searchTerm = params.searchTerm;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`,
    {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch search results");
  }
  const data = await res.json();
  console.log(data);
  
  return data && <Movies results={data.results} />;
}
