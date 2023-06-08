import { useParams } from "react-router-dom";
import { useDetailMovieQuery } from "../services/moviesAPI";

function DetailMovie() {
  const { id } = useParams();
  const { data, error, isLoading } = useDetailMovieQuery(`${id}`);

  return (
    <>
      <h1>INI DETAIL PAGE MOVIE</h1>
    </>
  );
}

export default DetailMovie;
