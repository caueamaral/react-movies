import { useContext, useEffect } from 'react'
import { FavoritesContext } from '../App'
import MovieCard from './MovieCard'

export default function Favorites() {
    const { favorites, setFavorites } = useContext(FavoritesContext)

    return (
        <article className="cards">
            {
                favorites.map(favorite => (
                    <MovieCard key={favorite.id} movie={favorite} />
                ))
            }
        </article>
    )
}