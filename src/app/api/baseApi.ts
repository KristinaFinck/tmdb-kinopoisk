import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery(
        {
            baseUrl: "https://api.themoviedb.org/3",
        prepareHeaders: headers => {
    const accessToken =  import.meta.env.VITE_TMDB_TOKEN
    if (accessToken) {
        headers.set('Authorization', `Bearer ${accessToken}`)
    }
    return headers
}},
        ),
        endpoints: () => ({}),

})