import { useEffect } from "react";
import { usePopularMovieQuery } from "../services/moviesAPI";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    data: dataPopular,
    error: errorPopular,
    isLoading: isLoadingPopular,
  } = usePopularMovieQuery();
  return <div>INI HOME</div>;
}

export default Home;
