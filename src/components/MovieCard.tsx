import { useContext } from 'react'
import { Link } from 'react-router-dom' 
import { FavoritesContext } from '../App'
import styled, { keyframes } from 'styled-components'
import type { MovieProps } from '../interfaces/MovieProps'
import formattedText from '../functions/formattedText'
import releaseYear from '../functions/releaseYear'

const slideIn = keyframes`
    from {
        opacity: 0;
        transform: translateX(100px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`

const StyledSection = styled.section<{ delay: number }>`
    animation: ${slideIn} 0.5s ease-out forwards;
    opacity: 0;
    animation-delay: ${({ delay }) => delay}ms;

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
    padding-bottom: 150%;
    position: relative;
`

const StyledLink = styled(Link)`
    cursor: pointer;
    inset: 0;
    position: absolute;
    z-index: 1;
`

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

const StyledSpinner = styled.svg`
    animation: ${spin} 2s linear infinite;
    fill: #fff;
    left: 50%;
    height: 40px;
    margin: -20px 0 0 -20px;
    position: absolute;
    top: 50%;
    width: 40px;
`

const StyledImg = styled.img`
    border-radius: 5px;
    left:0;
    position: absolute;
    top: 0;
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
    z-index: 2;

    &.active svg{
        fill: #d00;
        stroke: #d00;
    }
`

const StyledHeart = styled.svg`
    fill: #fff;
    height: 14px;
    width: 14px;
`

const StyledTitle = styled.div`
    line-height: 1.2em;
`

const StyledReleaseYear = styled.div`
    color: #aaa;
    margin-top: 5px;
`

export default function Card({ movie, index }: { movie: MovieProps, index: number }) {
    if (! movie.poster_path) return

    const { addToFavorites, removeFromFavorites, isFavorite } = useContext(FavoritesContext)

    const favorite = isFavorite(movie.id)

    const handleSvgClick = () => {
        favorite ? removeFromFavorites(movie.id) : addToFavorites(movie)
    }

    return (
        <StyledSection className="card" delay={index * 100}>
            <figure>
                <StyledDiv>
                    <StyledSpinner xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" id="Layer_1" version="1.1" viewBox="0 0 128 128" xmlSpace="preserve">
                        <g>
                            <path d="M96.1,103.6c-10.4,8.4-23.5,12.4-36.8,11.1c-10.5-1-20.3-5.1-28.2-11.8H44v-8H18v26h8v-11.9c9.1,7.7,20.4,12.5,32.6,13.6   c1.9,0.2,3.7,0.3,5.5,0.3c13.5,0,26.5-4.6,37-13.2c19.1-15.4,26.6-40.5,19.1-63.9l-7.6,2.4C119,68.6,112.6,90.3,96.1,103.6z"/><path d="M103,19.7c-21.2-18.7-53.5-20-76.1-1.6C7.9,33.5,0.4,58.4,7.7,81.7l7.6-2.4C9,59.2,15.5,37.6,31.9,24.4   C51.6,8.4,79.7,9.6,98,26H85v8h26V8h-8V19.7z" />
                        </g>
                    </StyledSpinner>
                    <StyledImg src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`} alt={movie.title} />
                    <StyledOverlay className="card-overlay" />
                    <StyledFavorite
                        className={`favorite ${favorite ? 'active' : ''}`}
                        onClick={handleSvgClick}
                    >
                        <StyledHeart
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z" />
                        </StyledHeart>
                    </StyledFavorite>
                    <StyledLink to={`/movie/${movie.id}/${formattedText(movie.title)}`}></StyledLink>
                </StyledDiv>
                <StyledFigcaption>
                    <StyledTitle>
                        {movie.title}
                    </StyledTitle>
                    <StyledReleaseYear>
                        {releaseYear(movie.release_date)}
                    </StyledReleaseYear>
                </StyledFigcaption>
            </figure>
        </StyledSection>
    )
}