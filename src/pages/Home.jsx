import { useEffect, useState } from "react";
import {
  usePopularMovieQuery,
  useTrendingMoviesWeeklyQuery,
  useTrendingSeriesWeeklyQuery,
  useTrendingMoviesIndonesiaQuery,
} from "../services/moviesAPI";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import Loading from "../components/Loading";
import MovieBanner from "../components/MovieBanner";
import MovieCard from "../components/MovieCard";
import MovieCardTop from "../components/MovieCardTop";

function Home() {
  const [activeFilter, setActiveFilter] = useState("all");

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

  const {
    data: dataTrendingSeries,
    error: errorTrendingSeries,
    isLoading: isLoadingTrendingSeries,
  } = useTrendingSeriesWeeklyQuery();

  const {
    data: dataInd,
    error: errorInd,
    isLoading: isLoadingInd,
  } = useTrendingMoviesIndonesiaQuery();

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  let filteredData;
  switch (activeFilter) {
    case "all":
      filteredData = {
        trending: dataTrending,
        indonesian: dataInd,
        series: dataTrendingSeries,
      };
      break;
    case "trending":
      filteredData = { trending: dataTrending };
      break;
    case "indonesian":
      filteredData = { indonesian: dataInd };
      break;
    case "series":
      filteredData = { series: dataTrendingSeries };
      break;
    default:
      filteredData = {};
  }

  const isDataLoading =
    isLoadingPopular ||
    isLoadingTrending ||
    isLoadingTrendingSeries ||
    isLoadingInd;

  const hasDataError =
    errorPopular || errorTrending || errorTrendingSeries || errorInd;

  return (
    <div className="mb-20">
      {hasDataError ? (
        <p className="text-center">Oh no, there was an error</p>
      ) : isDataLoading ? (
        <Loading />
      ) : (
        <>
          {/* Movie Banner */}
          <Swiper
            slidesPerView={1}
            effect="fade"
            loop={true}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            modules={[Pagination, Autoplay, EffectFade]}
            className="mySwiper"
          >
            {dataPopular.results.slice(0, 5).map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <MovieBanner item={item} />
                </SwiperSlide>
              );
            })}
          </Swiper>

          <div className="text-xl font-bold mt-16 mb-4 text-center">
            Filter Movie by
          </div>

          {/* Filter Buttons */}
          <div className="flex justify-center mt-10">
            <button
              className={`mx-2 px-4 py-2 rounded ${
                activeFilter === "all" ? "bg-red-600 text-white" : ""
              }`}
              onClick={() => handleFilterChange("all")}
            >
              All Movie
            </button>
            <button
              className={`mx-2 px-4 py-2 rounded ${
                activeFilter === "trending" ? "bg-red-600 text-white" : ""
              }`}
              onClick={() => handleFilterChange("trending")}
            >
              Trending This Week
            </button>
            <button
              className={`mx-2 px-4 py-2 rounded ${
                activeFilter === "indonesian" ? "bg-red-600 text-white" : ""
              }`}
              onClick={() => handleFilterChange("indonesian")}
            >
              Top 10 Indonesian Movies
            </button>
            <button
              className={`mx-2 px-4 py-2 rounded ${
                activeFilter === "series" ? "bg-red-600 text-white" : ""
              }`}
              onClick={() => handleFilterChange("series")}
            >
              Best Series
            </button>
          </div>

          {/* Trending */}
          {filteredData.trending && (
            <div className="container">
              <p className="text-xl font-bold mt-16 my-4">
                🔥 Trending This Week
              </p>
              <Swiper
                slidesPerView={1}
                spaceBetween={20}
                className="mySwiper"
                breakpoints={{
                  440: {
                    slidesPerView: 2,
                  },
                  640: {
                    slidesPerView: 3,
                  },
                  1024: {
                    slidesPerView: 5,
                  },
                  1280: {
                    slidesPerView: 6,
                  },
                }}
              >
                {filteredData.trending.results.map((item) => {
                  return (
                    <SwiperSlide key={item.id}>
                      <MovieCard key={item.id} item={item} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          )}

          {/* Indonesian Movies */}
          {filteredData.indonesian && (
            <div className="container">
              <p className="text-xl font-bold mt-16 mb-4">
                🥇 Top 10 Indonesian Movies
              </p>
              <Swiper
                slidesPerView={1}
                spaceBetween={20}
                className="mySwiper"
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                  1280: {
                    slidesPerView: 4,
                  },
                }}
              >
                {filteredData.indonesian.results
                  .slice(0, 10)
                  .map((item, index) => {
                    return (
                      <SwiperSlide key={item.id}>
                        <MovieCardTop
                          key={item.id}
                          item={item}
                          top={index + 1}
                        />
                      </SwiperSlide>
                    );
                  })}
              </Swiper>
            </div>
          )}

          {/* Best Series */}
          {filteredData.series && (
            <div className="container">
              <p className="text-xl font-bold mt-16 my-4">⭐ Best Series</p>
              <Swiper
                slidesPerView={1}
                spaceBetween={20}
                className="mySwiper"
                breakpoints={{
                  440: {
                    slidesPerView: 2,
                  },
                  640: {
                    slidesPerView: 3,
                  },
                  1024: {
                    slidesPerView: 5,
                  },
                  1280: {
                    slidesPerView: 6,
                  },
                }}
              >
                {filteredData.series.results.map((item) => {
                  return (
                    <SwiperSlide key={item.id}>
                      <MovieCard key={item.id} item={item} movie={false} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Home;
