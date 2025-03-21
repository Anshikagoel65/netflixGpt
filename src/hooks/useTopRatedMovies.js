import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const nowTopMovies = useSelector((store) => store.movies.nowTopRatedMovies);

  const getNowTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(jsonData.results);

    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    !nowTopMovies && getNowTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
