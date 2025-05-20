import MovieList from '../components/MovieList'
import MoviePagination from '../components/MoviePagination'

export default function Home() {
    return (
        <main>
            <MovieList />
            <MoviePagination />
        </main>
    )
}