import { useParams } from "react-router-dom";
import { BASE_IMAGE_URL } from "../api/tmdb";
import {
  useDetailMovieQuery,
  useMovieSimilarQuery,
  useMovieRecommendationsQuery,
  useMovieVideosQuery,
} from "../services/moviesAPI";

function DetailMovie() {
  window.scrollTo(0, 0);
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

  const {
    data: dataMovieVid,
    error: errorMovieVid,
    isLoading: isLoadingMovieVid,
  } = useMovieVideosQuery(`${id}`);
  return (
    <div className="mb-20">
      {error || errorMovieRec || errorMovieVid || errorMovieSim ? (
        <p className="text-center">Oh no, there was an error</p>
      ) : isLoading ||
        isLoadingMovieRec ||
        isLoadingMovieVid ||
        isLoadingMovieSim ? (
        <p className="text-center">Loading...</p>
      ) : data && dataMovieRec && dataMovieVid && dataMovieSim ? (
        <>
          {/* Movie Detail */}
          <div className="relative">
            <div className="container">
              <div className="absolute z-20 container pl-0 pr-8 h-full flex justify-center gap-10 items-center">
                <img
                  src={
                    data.poster_path
                      ? `${BASE_IMAGE_URL}${data.poster_path}`
                      : "src/assets/images/image_not_found.png"
                  }
                  alt={data.title}
                  className="h-[28rem] w-[18rem] object-cover object-center rounded-md shadow-lg shadow-neutral-900"
                />
                <div className="flex max-w-3xl gap-4 flex-col justify-center">
                  <div className="my-5">
                    <p className="font-bold text-4xl text-shadow-title leading-[3.35rem]">
                      {`${data.title}`}{" "}
                      {data.release_date &&
                        `(${data.release_date.split("-")[0]})`}
                    </p>
                    {data.tagline && (
                      <p className="text-lg italic text-shadow-desc text-zinc-200">
                        &apos;{data.tagline}&apos;
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                      <p className="flex gap-1 w-fit font-semibold text-shadow-white text-black text-sm px-2 rounded-sm bg-gradient-to-br from-zinc-200 to-zinc-500">
                        <img src="src\assets\images\ic_calendar.svg" alt="" />
                      </p>
                      <p className="flex gap-1 w-fit font-semibold text-shadow-white text-black text-sm px-2 rounded-sm bg-gradient-to-br from-zinc-200 to-zinc-500">
                        <img src="src\assets\images\ic_clock.svg" alt="" />
                        {data.runtime}min
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {data.genres.map((genre, index) => (
                        <p
                          key={index}
                          className="text-shadow-white text-zinc-200 text-sm px-2 rounded-sm bg-gradient-to-br from-red-700"
                        >
                          {genre.name}
                        </p>
                      ))}
                    </div>
                  </div>
                  <p className="text-shadow-desc text-lg text-zinc-200">
                    {data.overview}
                  </p>
                </div>
              </div>
            </div>
            {data.backdrop_path ? (
              <img
                src={`${BASE_IMAGE_URL}${data.backdrop_path}`}
                alt={data.title}
                className="h-[46rem] w-[200rem] object-cover object-center"
              />
            ) : (
              <div className="h-[46rem]" />
            )}
            <div className="absolute top-0 bg-zinc-900 h-full w-full z-10 opacity-90"></div>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default DetailMovie;
