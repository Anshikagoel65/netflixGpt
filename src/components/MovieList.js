import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div className="px-6 ">
      <h1 className="text-3xl font-bold py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll overflow-y-hidden scrollbar-hide space-x-4 relative">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie?.id} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
