import { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { styled } from 'styled-components'
import { CurrentPageContext, MaxPaginationContext, MoviesContext } from '../App'

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
    const { page } = useParams()
    const { currentPage, setCurrentPage } = useContext(CurrentPageContext)
    const { maxPagination } = useContext(MaxPaginationContext)
    const { movies } = useContext(MoviesContext)
    const navigate = useNavigate()

    useEffect(() => {
        setCurrentPage(page || '1')
    }, [page])

    if (! movies.length) return

    const pagesNumber = Array.from({ length: maxPagination }, (_, i) => String(i + 1))

    const handleButtonClick = (pageNumber: string) => {
        setCurrentPage(pageNumber)
        navigate(`/page/${pageNumber}`)
    }

    return (
        <StyledPagination className="pagination">
            <div>
                Pagination
            </div>
            <StyledButtonsContainer>
                {
                    pagesNumber.map((pageNumber) => (
                        <StyledButton
                            key={pageNumber}
                            className={currentPage === pageNumber ? 'active' : ''}
                            onClick={() => handleButtonClick(pageNumber)}
                        >
                            {pageNumber}
                        </StyledButton>
                    ))
                }
            </StyledButtonsContainer>
        </StyledPagination>
    )
}