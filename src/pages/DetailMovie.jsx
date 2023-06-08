import { useParams } from "react-router-dom";
import {
  useDetailMovieQuery,
  useMovieSimilarQuery,
  useMovieRecommendationsQuery,
} from "../services/moviesAPI";

function DetailMovie() {
  const { id } = useParams();
  const { data, error, isLoading } = useDetailMovieQuery(`${id}`);

  const {
    data: dataMovieSim,
    error: errorMovieSim,
    isLoading: isLoadingMovieSim,
  } = useMovieSimilarQuery(`${id}`);

  const {
    data: dataMovieRec,
    error: errorMovieRec,
    isLoading: isLoadingMovieRec,
  } = useMovieRecommendationsQuery(`${id}`);
  return (
    <>
      <h1>INI DETAIL PAGE MOVIE</h1>
    </>
  );
}

export default DetailMovie;
