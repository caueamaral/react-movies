import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'
import { MoviesContext } from '../App'

const StyledPagination = styled.section`
    align-items: center;
    display: flex;
    gap:10px;
    justify-content: center;
    margin-top: 40px;
`

const StyledButtonsContainer = styled.div`
    display: flex;
    gap: 5px;
`

const StyledButton = styled.button`
    border: none;
    border-radius: 3px;
    cursor: pointer;
    padding: 10px 12px;

    &.active {
        background: #333;
        color: #fff;
        pointer-events: none;
    }
`

export default function MoviePagination() {
    const { movies } = useContext(MoviesContext)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const navigate = useNavigate()

    if (! movies.length) return

    const pages: number[] = [1, 2, 3, 4, 5]

    const handleButtonClick = (page: number) => {
        setCurrentPage(page)
        navigate(`/page/${page}`)
    }

    return (
        <StyledPagination>
            <div>
                Pagination
            </div>
            <StyledButtonsContainer>
                {
                    pages.map((page) => (
                        <StyledButton
                            key={page}
                            className={currentPage === page ? 'active' : ''}
                            onClick={() => handleButtonClick(page)}
                        >
                            {page}
                        </StyledButton>
                    ))
                }
            </StyledButtonsContainer>
        </StyledPagination>
    )
}