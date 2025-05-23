import { createContext, useEffect, useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from './components/GlobalStyle'
import type { MovieProps } from './interfaces/MovieProps'
import Header from './components/Header'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import Movie from './pages/Movie'
import PageNotFound from './pages/PageNotFound'
import './css/reset.css'

export const SearchContext = createContext<{
    search: string;
    setSearch: (search: string) => void
  }>({
    search: '',
    setSearch: () => {}
})

export const MoviesContext = createContext<{
  movies: MovieProps[];
  setMovies: React.Dispatch<React.SetStateAction<MovieProps[]>>
}>({
  movies: [],
  setMovies: () => {}
})

export const FavoritesContext = createContext<{
  favorites: MovieProps[];
  setFavorites: React.Dispatch<React.SetStateAction<MovieProps[]>>;
  addToFavorites: (movie: MovieProps) => void;
  removeFromFavorites: (movieId: number) => void;
  isFavorite: (movieId: number) => boolean;
}>({
  favorites: [],
  setFavorites: () => {},
  addToFavorites: () => {},
  removeFromFavorites: () => {},
  isFavorite: () => false
})

function App() {
  const [search, setSearch] = useState<string>('')
  const [movies, setMovies] = useState<MovieProps[]>([])
  const [favorites, setFavorites] = useState<MovieProps[]>([])
  const [hydrated, setHydrated] = useState<boolean>(false)

  useEffect(() => {
      const storeFavorites = sessionStorage.getItem('favorites')
      const parsedFavorites = JSON.parse(storeFavorites ?? '[]') as MovieProps[]
      setFavorites(parsedFavorites)
      setHydrated(true)
  }, [])

  useEffect(() => {

    if (hydrated) {
      sessionStorage.setItem('favorites', JSON.stringify(favorites))
    }
  }, [favorites])

  const addToFavorites = (movie: MovieProps) => {
    setFavorites(prev => [...prev, movie])
  }

  const removeFromFavorites = (movieId: number) => {
    setFavorites(prev => prev.filter(movie => movie.id !== movieId))
  }

  const isFavorite = (movieId: number) => {
    return favorites.some(movie => movie.id === movieId)
  }

  const searchValues = {
    search,
    setSearch
  }
  
  const moviesValues = {
    movies,
    setMovies
  }

  const favoritesValues = {
    favorites,
    setFavorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite
  }

  return (
    <>
      <SearchContext.Provider value={ searchValues }>
        <MoviesContext.Provider value={ moviesValues }>
          <FavoritesContext.Provider value={ favoritesValues }>
            <HashRouter>
              <GlobalStyle />
              <Header />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/search/:query" element={<Home />} />
                  <Route path="/favorites" element={<Favorites />} />
                  <Route path="/movie/:id/:title" element={<Movie />} />
                  <Route path="*" element={<PageNotFound />} />
                </Routes>
            </HashRouter>
          </FavoritesContext.Provider>
        </MoviesContext.Provider>
      </SearchContext.Provider>
    </>
  )
}

export default App