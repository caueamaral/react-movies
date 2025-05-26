import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { CurrentPageContext, MoviesContext, SearchContext } from '../App'
import getMovies from '../services/getMovies'
import getMovieByText from '../services/getMovieByText'
import MovieList from '../components/MovieList'
import MoviePagination from '../components/MoviePagination'
import PageNotFound from './PageNotFound'

export default function Home() {
    const { query, page } = useParams()
    const { setCurrentPage } = useContext(CurrentPageContext)
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
                setCurrentPage('1')
                setLoading(false)
            }
            else {
                const pageNumber = page || '1'
                const validPage = Number(pageNumber)

                if (validPage < 1 || validPage > 10 || isNaN(validPage)) {
                    setMovies([])
                    setLoading(false)
                    return
                }

                const response = await getMovies(pageNumber)
                setMovies(response.data.results)
                setCurrentPage(pageNumber)
                setLoading(false)
            }
        }

        fetchData()
    }, [query, page])

    const validPage = page ? Number(page) >= 1 && Number(page) <= 10 : true

    if (page && !validPage) return <PageNotFound />

    return (
        <>        
            <MovieList />
            {! query && (<MoviePagination />)}
        </>
    )
}