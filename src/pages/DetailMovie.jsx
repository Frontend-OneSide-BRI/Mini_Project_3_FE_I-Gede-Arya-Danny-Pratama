import { useParams } from "react-router-dom";
import {
  useDetailMovieQuery,
  useMovieSimilarQuery,
} from "../services/moviesAPI";

function DetailMovie() {
  const { id } = useParams();
  const { data, error, isLoading } = useDetailMovieQuery(`${id}`);
  const {
    data: dataMovieSim,
    error: errorMovieSim,
    isLoading: isLoadingMovieSim,
  } = useMovieSimilarQuery(`${id}`);

  return (
    <>
      <h1>INI DETAIL PAGE MOVIE</h1>
    </>
  );
}

export default DetailMovie;
