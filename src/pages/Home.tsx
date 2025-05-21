import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { MoviesContext, SearchContext } from '../App'
import getMovies from '../services/getMovies'
import getMovieByText from '../services/getMovieByText'
import MovieList from '../components/MovieList'
import MoviePagination from '../components/MoviePagination'

export default function Home() {
    const { query } = useParams()
    const { setMovies } = useContext(MoviesContext)
    const { setSearch } = useContext(SearchContext)

    useEffect(() => {
        const fetchData = async () => {
            if (query) {
                const searchTerm = query.replace(/-/g, ' ')
                const capitalizedSearchTerm = searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1)

                setSearch(capitalizedSearchTerm)

                const response = await getMovieByText(searchTerm)
                setMovies(response.data.results)
            }
            else {
                const page = 1
                const response = await getMovies(page)
                setMovies(response.data.results)
            }
        }

        fetchData()
    }, [query])

    return (
        <main>
            <MovieList />
            <MoviePagination />
        </main>
    )
}