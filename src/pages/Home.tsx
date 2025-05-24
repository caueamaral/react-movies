import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { MoviesContext, SearchContext } from '../App'
import getMovies from '../services/getMovies'
import getMovieByText from '../services/getMovieByText'
import MovieList from '../components/MovieList'
import MoviePagination from '../components/MoviePagination'

export default function Home() {
    const { query } = useParams()
    const { setMovies, setLoading } = useContext(MoviesContext)
    const { setSearch } = useContext(SearchContext)

    useEffect(() => {
        const fetchData = async () => {
            if (query) {
                const searchTerm = query.replace(/-/g, ' ')
                const capitalizedSearchTerm = searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1)

                setSearch(capitalizedSearchTerm)

                const response = await getMovieByText(encodeURIComponent(query))
                setMovies(response.data.results)
                setLoading(false)
            }
            else {
                const page = 1
                const response = await getMovies(page)
                setMovies(response.data.results)
                setLoading(false)
            }
        }

        fetchData()
    }, [query])

    return (
        <>        
            <MovieList />
            {! query && (<MoviePagination />)}
        </>
    )
}