import { useContext } from 'react'
import { MoviesContext } from '../App'
import MovieCard from './MovieCard'
import MovieNotFound from '../components/MovieNotFound'

export default function Movies() {
    const { movies, loading } = useContext(MoviesContext)

    if (loading) return
    if (! movies.length) return <MovieNotFound />

    return (
        <article className="cards">
            {movies.map((movie, index) => (
                <MovieCard
                    key={movie.id}
                    movie={movie}
                    index={index}
                />
            ))}
        </article>
    )
}