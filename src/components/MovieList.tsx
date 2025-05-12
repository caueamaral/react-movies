import { useContext, useEffect } from 'react'
import { MoviesContext } from '../App'
import styled from 'styled-components'
import MovieCard from './MovieCard'
import MoviesApi from '../services/MoviesApi'

const StyledArticle = styled.article`
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`

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
        <StyledArticle>
            {
                movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))
            }
        </StyledArticle>
    )
}