import { useEffect } from "react";
import {
  usePopularMovieQuery,
  useTrendingMoviesWeeklyQuery,
  useTrendingSeriesWeeklyQuery,
  useTrendingMoviesIndonesiaQuery,
} from "../services/moviesAPI";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper";
import Loading from "../components/Loading";
import MovieBanner from "../components/MovieBanner";
import MovieCard from "../components/MovieCard";

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

  return (
    <div className="mb-20">
      {errorPopular || errorTrending || errorTrendingSeries || errorInd ? (
        <p className="text-center">Oh no, there was an error</p>
      ) : isLoadingPopular ||
        isLoadingTrending ||
        isLoadingTrendingSeries ||
        isLoadingInd ? (
        <Loading />
      ) : dataPopular && dataTrending && dataTrendingSeries && dataInd ? (
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

          {/* Trending */}
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
              {dataTrending.results.map((item) => {
                return (
                  <SwiperSlide key={item.id}>
                    <MovieCard key={item.id} item={item} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default Home;
