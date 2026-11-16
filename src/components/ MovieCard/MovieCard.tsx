import type {MovieType} from "../../schemas/movie.schema.ts";

type MovieCardProps = {
    movie: MovieType
 }

 export const MovieCard = (props: MovieCardProps) => {
     const imageBaseUrl = 'https://image.tmdb.org/t/p/'
     const posterSize = 'w500'
    return (
        <div>
            {props.movie.title}
            {props.movie.vote_average.toFixed(1)}
            {/* Если у фильма нет постера, показываем заглушку */}
            <img
                src={  props.movie.poster_path
                    ? `${imageBaseUrl}${posterSize}${props.movie.poster_path}`
                 : 'https://placehold.co/500x750'
                }
                alt={props.movie.title}
            />
        </div>
    )
 }