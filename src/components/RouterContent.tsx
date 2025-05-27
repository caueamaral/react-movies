import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './Header'
import Movies from '../pages/Movies'
import Favorites from '../pages/Favorites'
import Movie from '../pages/Movie'
import PageNotFound from '../pages/PageNotFound'

export default function RouterContent() {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [pathname])

    return (
        <>
            <Header />
            <main>
                <Routes>
                <Route path="/" element={<Movies />} />
                <Route path="/search/:query" element={<Movies />} />
                <Route path="/page/:page" element={<Movies />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/movie/:id/:title" element={<Movie />} />
                <Route path="*" element={<PageNotFound />} />
                </Routes>
            </main>
        </>
    )
}