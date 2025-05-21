import { useContext } from 'react'
import { MoviesContext } from '../App'
import MovieCard from './MovieCard'
import MovieNotFound from '../components/MovieNotFound'

export default function Movies() {
    const { movies } = useContext(MoviesContext)

    return (
        <article className="cards">
            {
                movies.length ? (
                    movies.map(movie => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))
                ) : (
                    <MovieNotFound />
                )
            }
        </article>
    )
}