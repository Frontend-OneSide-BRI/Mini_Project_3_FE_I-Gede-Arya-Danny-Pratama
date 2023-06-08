import { useParams } from "react-router-dom";
import { useSearchMoviesQuery } from "../services/moviesAPI";

function Search() {
  window.scrollTo(0, 0);
  const { query, page } = useParams();
  const { data, error, isLoading } = useSearchMoviesQuery({
    query: query,
    page: page,
  });
  return (
    <>
      <h1>INI PAGE HASIL SEARCH</h1>
    </>
  );
}

export default Search;
