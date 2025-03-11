import { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import genAI from "../utils/openAI";
import { API_OPTIONS } from "../utils/constants";
import { addGptMoviesResults } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=true&language=en-US&page=1",
      API_OPTIONS
    );
    const jsonData = await data.json();
    return jsonData.results;
  };

  const handleGptSearchClick = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movie for the query: " +
      searchText.current.value +
      "separated by comma";

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const getResult = async () => {
      const prompt = gptQuery;
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      return text;
    };
    const finalCall = async () => {
      const text = await getResult();
      const gptMovies = text.split(",");

      const promiseArray = gptMovies?.map((movie) => searchMovieTMDB(movie));
      const tmdbResults = await Promise.all(promiseArray);
      dispatch(
        addGptMoviesResults({ movieName: gptMovies, movieResults: tmdbResults })
      );
    };
    finalCall();
  };

  return (
    <div className=" pt-[10%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 grid grid-cols-12 bg-black"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
