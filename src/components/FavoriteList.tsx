import { useContext } from 'react'
import { FavoritesContext } from '../App'
import MovieCard from './MovieCard'

export default function Favorites() {
    const { favorites } = useContext(FavoritesContext)

    return (
        <article className="cards">
            {
                favorites.map((favorite, index) => (
                    <MovieCard
                        key={favorite.id}
                        movie={favorite}
                        index={index}
                    />
                ))
            }
        </article>
    )
}