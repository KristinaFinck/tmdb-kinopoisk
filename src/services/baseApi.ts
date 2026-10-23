
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const token = import.meta.env.VITE_TMDB_ACCESS_TOKEN

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3',
        prepareHeaders: (headers) => {
            headers.set('Authorization', `Bearer ${token}`)
            headers.set('accept', 'application/json')
            return headers
        },
    }),
    endpoints: () => ({}),
})
