import {
  useDetailSeriesQuery,
  useSeriesSimilarQuery,
} from "../services/moviesAPI";
import { useParams } from "react-router-dom";

function DetailSeries() {
  const { id } = useParams();
  const { data, error, isLoading } = useDetailSeriesQuery(`${id}`);

  const {
    data: dataSeriesSim,
    error: errorSeriesSim,
    isLoading: isLoadingSeriesSim,
  } = useSeriesSimilarQuery(`${id}`);
  return (
    <>
      <h1>INI HALAMAN DETAIL SERIES</h1>
    </>
  );
}

export default DetailSeries;
