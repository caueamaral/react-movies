import { styled } from 'styled-components'
import { useContext } from 'react'
import { MoviesContext } from '../App'
import MoviesApi from '../services/MoviesApi'

const StyledPagination = styled.section`
    align-items: center;
    display: flex;
    gap:10px;
    justify-content: center;
    margin-top: 40px;
`

const StyledButton = styled.button`
    cursor: pointer;
    padding: 10px;
`

export default function MoviePagination() {
    const { movies, setMovies } = useContext(MoviesContext)

    const handleButtonClick = (page: number) => {
        console.log(`The button ${page} has been clicked`)

        const fetchMovies = async () => {
            try {
                const response = await MoviesApi(page)
page
                setMovies(response.data.results)
            } catch(error) {
                console.error('Faile to fetch movies: ', error)
            }
        }

        fetchMovies()
    }

    return (
        <StyledPagination>
            <div>
                Pagination
            </div>
            <div>
                <StyledButton onClick={() => handleButtonClick(1)}>1</StyledButton>
                <StyledButton onClick={() => handleButtonClick(2)}>2</StyledButton>
                <StyledButton onClick={() => handleButtonClick(3)}>3</StyledButton>
            </div>
        </StyledPagination>
    )
}