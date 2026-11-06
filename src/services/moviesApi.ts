import { baseApi } from './baseApi'
import type {PopularMoviesType} from "../schemas/movie.schema";
import {popularMoviesSchema} from "../schemas/movie.schema";

export const moviesApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
   getPopularMovies: build.query<PopularMoviesType, void>({
       query: () => '/movie/popular',
       transformResponse: (response: unknown) => {
           return popularMoviesSchema.parse(response)
       }
   })
    }),

})
export const { useGetPopularMoviesQuery } = moviesApi