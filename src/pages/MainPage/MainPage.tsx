import {useGetPopularMoviesQuery} from "../../services/moviesApi.ts";

export const MainPage = () => {

    const {data, isLoading, error} = useGetPopularMoviesQuery()
    return (
        <>
       <h1> Фильмы: </h1>
            {data?.results.map((el) =>
           <p key={el.id}>
               {el.title}
           </p>)}
        </>
    )
}