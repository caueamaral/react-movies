import { useContext, useEffect } from 'react'
import { FavoritesContext } from '../App'
import styled from 'styled-components'
import MovieCard from './MovieCard'
import MoviesApi from '../services/MoviesApi'

const StyledArticle = styled.article`
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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