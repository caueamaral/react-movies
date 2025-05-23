import { useContext, useEffect } from 'react'
import { styled } from 'styled-components'
import { FavoritesContext, SearchContext } from '../App'
import FavoriteList from '../components/FavoriteList'

const StyledMain = styled.main`
    align-items: center;
    display: flex;
    justify-content: center;
`

const StyledH1 = styled.h1`
    font-size: 26px;

    @media (min-width:1024px) {
        font-size: 40px;
    }
`

export default function Favorites() {
    const { favorites } = useContext(FavoritesContext)
    const { setSearch } = useContext(SearchContext)

    useEffect(() => {
        setSearch('')
    }, [setSearch])

    if (! favorites.length) return (
        <StyledMain>
            <section>
                <StyledH1>You don't have any favorite movies yet</StyledH1>
            </section>
        </StyledMain>
    )

    return (
        <main>
            <FavoriteList />
        </main>
    )
}