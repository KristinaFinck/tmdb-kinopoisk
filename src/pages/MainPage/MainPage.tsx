import {useGetPopularMoviesQuery} from "../../services/moviesApi.ts";
import {MovieCard} from "../../components/ MovieCard/MovieCard.tsx";

export const MainPage = () => {

    const {data} = useGetPopularMoviesQuery()
    return (
        <>
       <h1> Фильмы: </h1>
            {data?.results.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
                ))}
        </>
    )
}