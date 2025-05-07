import styled from 'styled-components'
import Movie from './Movie'

const StyledArticle = styled.article`
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`

const movies = [
    { id: 1, title: 'Hunger Games 1' },
    { id: 2, title: 'Hunger Games 2' },
    { id: 3, title: 'Hunger Games 3' },
    { id: 4, title: 'Hunger Games 4' },
    { id: 5, title: 'Hunger Games 5' },
    { id: 6, title: 'Hunger Games 6' }
]

export default function Movies() {
    return (
        <StyledArticle>
            {
                movies.map(movie => (
                    <Movie key={movie.id} movie={movie} />
                ))
            }
        </StyledArticle>
    )
}