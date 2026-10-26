import { baseApi } from './baseApi'

export const moviesApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
   getPopularMovies: build.query<unknown, void>({
       query: () => '/movie/popular'
   })
    }),
})
export const { useGetPopularMoviesQuery } = moviesApi