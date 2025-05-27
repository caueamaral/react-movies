import { createContext, useEffect, useState } from 'react'
import { HashRouter } from 'react-router-dom'
import { GlobalStyle } from './components/GlobalStyle'
import type { MovieProps } from './interfaces/MovieProps'
import './css/reset.css'
import RouterContent from './components/RouterContent'

export const SearchContext = createContext<{
    search: string;
    setSearch: (search: string) => void
  }>({
    search: '',
    setSearch: () => {}
})

export const CurrentPageContext = createContext<{
  currentPage: string;
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}>({
  currentPage: '1',
  setCurrentPage: () => {}
})

export const MaxPaginationContext = createContext<{
  maxPagination: number;
  setMaxPagination: React.Dispatch<React.SetStateAction<number>>;
}>({
  maxPagination: 7,
  setMaxPagination: () => {}
})

export const MoviesContext = createContext<{
  movies: MovieProps[];
  setMovies: React.Dispatch<React.SetStateAction<MovieProps[]>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  movies: [],
  setMovies: () => {},
  loading: true,
  setLoading: () => {}
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
  const [ search, setSearch ] = useState<string>('')
  const [ currentPage, setCurrentPage ] = useState<string>('1')
  const [ maxPagination, setMaxPagination ] = useState<number>(7)
  const [ movies, setMovies ] = useState<MovieProps[]>([])
  const [ loading, setLoading ] = useState<boolean>(true)
  const [ favorites, setFavorites ] = useState<MovieProps[]>([])
  const [ hydrated, setHydrated ] = useState<boolean>(false)

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

  const currentPageValues = {
    currentPage,
    setCurrentPage
  }
  
  const maxPaginationValues = {
    maxPagination,
    setMaxPagination
  }

  const moviesValues = {
    movies,
    setMovies,
    loading,
    setLoading
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
        <CurrentPageContext.Provider value={ currentPageValues }>
          <MaxPaginationContext.Provider value={ maxPaginationValues }>
            <MoviesContext.Provider value={ moviesValues }>
              <FavoritesContext.Provider value={ favoritesValues }>
                <HashRouter>
                  <GlobalStyle />
                  <RouterContent />
                </HashRouter>
              </FavoritesContext.Provider>
            </MoviesContext.Provider>
          </MaxPaginationContext.Provider>
        </CurrentPageContext.Provider>
      </SearchContext.Provider>
    </>
  )
}

export default App