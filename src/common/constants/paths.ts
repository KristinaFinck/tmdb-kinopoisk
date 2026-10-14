export const PATH = {
    MAIN: '/',
    CATEGORY_MOVIES: '/movies/:category',
    FILTERED_MOVIES: '/movies/filter',
    SEARCH: '/search',
    FAVORITES: '/favorites',
    MOVIE_DETAILS: '/movie/:movieId',
    NOT_FOUND: '*',
} as const