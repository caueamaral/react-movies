import styled from 'styled-components'
import type { MovieProps } from '../interfaces/MovieProps'

const StyledSection = styled.section`
    &:hover {
        opacity: .9;
    }

    &:hover div svg {
        display: block;
    }
`

const StyledDiv = styled.div`
    position: relative;
`

const StyledImg = styled.img`
    border-radius: 5px;
    width: 100%;
`

const StyledFigcaption = styled.figcaption`
    padding-block: 7px;
`

const StyledSvg = styled.svg`
    cursor: pointer;
    display: none;
    fill: none;
    height: 25px;
    position: absolute;
    right: 15px;
    stroke: #fff;
    top: 15px;
    width: 25px;

    &.active{
        fill: #d00;
        stroke: #d00;
    }
`

export default function Card({ movie }: { movie: MovieProps }) {
    return (
        <StyledSection className="card">
            <StyledDiv>
                <figure>
                    <StyledImg src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`} alt={movie.title} />
                    <StyledFigcaption>{movie.title}</StyledFigcaption>
                </figure>
                <StyledSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z" />
                </StyledSvg>
            </StyledDiv>
        </StyledSection>
    )
}