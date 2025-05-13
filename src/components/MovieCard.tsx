import { useContext } from 'react'
import { FavoritesContext } from '../App'
import styled from 'styled-components'
import type { MovieProps } from '../interfaces/MovieProps'

const StyledSection = styled.section`
    &:hover .card-overlay {
        opacity: 1;
        visibility: visible;
    }

    &:hover .favorite {
        opacity: 1;
        visibility: visible;
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
    position: relative;
`

const StyledOverlay = styled.div`
    background: rgba(0, 0, 0, .3);
    bottom: 0;
    left: 0;
    opacity: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: opacity 300ms;
    visibility: hidden;
`

const StyledFavorite = styled.div`
    background: rgba(0, 0, 0, .7);
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    opacity: 0;
    padding: 10px;
    position: absolute;
    right: 10px;
    top: 10px;
    visibility: hidden;

    &.active svg{
        fill: #d00;
        stroke: #d00;
    }
`

const StyledSvg = styled.svg`
    fill: #fff;
    height: 14px;
    width: 14px;
`

export default function Card({ movie }: { movie: MovieProps }) {
    const { addToFavorites, removeFromFavorites, isFavorite } = useContext(FavoritesContext)

    const favorite = isFavorite(movie.id)

    const handleSvgClick = () => {

        if (favorite) removeFromFavorites(movie.id)
        else addToFavorites(movie)
    }

    return (
        <StyledSection className="card">
            <figure>
                <StyledDiv>
                    <StyledImg src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`} alt={movie.title} />
                    <StyledOverlay className="card-overlay" />
                    <StyledFavorite
                        className={`favorite ${favorite ? 'active' : ''}`}
                        onClick={handleSvgClick}
                    >
                        <StyledSvg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z" />
                        </StyledSvg>
                    </StyledFavorite>
                </StyledDiv>
                <StyledFigcaption>{movie.title}</StyledFigcaption>
            </figure>
        </StyledSection>
    )
}