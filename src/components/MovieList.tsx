import { useContext, useEffect } from 'react'
import { MoviesContext } from '../App'
import MovieCard from './MovieCard'
import MoviesApi from '../services/MoviesApi'

export default function Movies() {
    const { movies, setMovies } = useContext(MoviesContext)

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await MoviesApi()
                setMovies(response.data.results)
            } catch(error) {
                console.error('Faile to fetch movies: ', error)
            }
        }

        fetchMovies()
    }, [])

    return (
        <article className="cards">
            {
                movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))
            }
        </article>
    )
}