import { useEffect } from "react";
import {
  usePopularMovieQuery,
  useTrendingMoviesWeeklyQuery,
} from "../services/moviesAPI";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    data: dataPopular,
    error: errorPopular,
    isLoading: isLoadingPopular,
  } = usePopularMovieQuery();

  const {
    data: dataTrending,
    error: errorTrending,
    isLoading: isLoadingTrending,
  } = useTrendingMoviesWeeklyQuery();

  return <div>INI HOME</div>;
}

export default Home;
