import { useDetailSeriesQuery } from "../services/moviesAPI";

function DetailSeries() {
  const { id } = useParams();
  const { data, error, isLoading } = useDetailSeriesQuery(`${id}`);
  return (
    <>
      <h1>INI HALAMAN DETAIL SERIES</h1>
    </>
  );
}

export default DetailSeries;
