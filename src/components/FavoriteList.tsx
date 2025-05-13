import { useContext, useEffect } from 'react'
import { FavoritesContext } from '../App'
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

export default function Favorites() {
    const { favorites, setFavorites } = useContext(FavoritesContext)

    return (
        <StyledArticle>
            {
                favorites.map(favorite => (
                    <MovieCard key={favorite.id} movie={favorite} />
                ))
            }
        </StyledArticle>
    )
}