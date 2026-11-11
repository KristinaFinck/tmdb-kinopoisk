import {useGetPopularMoviesQuery} from "../../services/moviesApi.ts";

export const MainPage = () => {

    const {data, isLoading, error} = useGetPopularMoviesQuery()
    const imageBaseUrl = 'https://image.tmdb.org/t/p/'
    const posterSize = 'w500'
    return (
        <>
       <h1> Фильмы: </h1>
            {data?.results.map((el) =>
                <div key={el.id}>
           <p>
               {el.title}

           </p>
                    <img
                        src={`${imageBaseUrl}${posterSize}${el.poster_path}`}
                         alt={el.title} />

                </div>

            )
            }
        </>
    )
}