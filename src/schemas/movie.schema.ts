import {z} from 'zod'

export const movieSchema = z.object({
    id: z.number(),
    title: z.string(),
    poster_path: z.string().nullable(),
    vote_average: z.number(),
    overview: z.string(),
    release_date: z.string()
})
export type MovieType = z.infer<typeof movieSchema>

export const popularMoviesSchema = z.object({
    page: z.number(),
    results: z.array(movieSchema),
    total_pages: z.number(),
    total_results: z.number()
})
export type PopularMoviesType = z.infer<typeof popularMoviesSchema>