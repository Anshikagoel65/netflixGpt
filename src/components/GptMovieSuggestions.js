import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieResults, movieName } = useSelector((store) => store.gpt);
  if (!movieName) return null;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      <div>
        {movieName?.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
