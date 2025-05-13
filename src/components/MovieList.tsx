import { useContext, useEffect } from 'react'
import { MoviesContext } from '../App'
import styled from 'styled-components'
import MovieCard from './MovieCard'
import MoviesApi from '../services/MoviesApi'

const StyledArticle = styled.article`
    display: grid;
    gap: 20px;

    @media (max-width: 767px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 768px) and (max-width: 1023px) {
        grid-template-columns: repeat(4, 1fr);
    }

    @media (min-width: 1024px) {
        grid-template-columns: repeat(6, 1fr);
    }
`

export default function Movies() {
    const { movies, setMovies } = useContext(MoviesContext)

    useEffect(() => {
        console.log(123)

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
        <StyledArticle>
            {
                movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))
            }
        </StyledArticle>
    )
}