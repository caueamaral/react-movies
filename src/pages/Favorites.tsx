import { useContext, useEffect } from 'react'
import { SearchContext } from '../App'
import FavoriteList from '../components/FavoriteList'

export default function Favorites() {
    const { setSearch } = useContext(SearchContext)

    useEffect(() => {
        setSearch('')
    }, [setSearch])

    return (
        <main>
            <FavoriteList />
        </main>
    )
}