import { useContext, useEffect } from 'react'
import { MoviesContext } from '../App'
import MovieCard from './MovieCard'
import MoviesApi from '../services/MoviesApi'
import MovieNotFound from '../components/MovieNotFound'

export default function Movies() {
    const { movies, setMovies } = useContext(MoviesContext)

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const pageNumber: number = 1
                const response = await MoviesApi(pageNumber)
                
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