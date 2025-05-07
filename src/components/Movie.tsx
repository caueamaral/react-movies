import styled from 'styled-components'
import type { MovieProps } from '../interfaces/MovieProps'

const StyledSection = styled.section`
    border: 1px solid #aaa;
`

const StyledImg = styled.img`
    width: 100%;
`

const StyledFigcaption = styled.figcaption`
    padding: 10px;
`

export default function Card({ movie }: { movie: MovieProps }) {
    return (
        <StyledSection>
            <figure>
                <StyledImg src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/2hTPkBiXoMmrdtYgHtB9WU5dg80.jpg" alt="Hunger Games" />
                <StyledFigcaption>{movie.title}</StyledFigcaption>
            </figure>
        </StyledSection>
    )
}