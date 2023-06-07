import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, API_KEY } from "../apis/tmdb";

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (build) => ({
    popularMovie: build.query({
      query: () => `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`,
    }),
    trendingMoviesWeekly: build.query({
      query: () => `/trending/movie/week?api_key=${API_KEY}`,
    }),
  }),
});

export const { usePopularMovieQuery } = moviesApi;
