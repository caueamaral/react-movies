import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createContext, useState } from 'react'
import { GlobalStyle } from './components/GlobalStyle'
import type { MovieProps } from './interfaces/MovieProps'
import Header from './components/Header'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import NotFound from './pages/NotFound'
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

function App() {
  const [search, setSearch] = useState<string>('')
  const [movies, setMovies] = useState<MovieProps[]>([])
  
  return (
    <>
      <SearchContext.Provider value={{ search, setSearch }}>
        <MoviesContext.Provider value={{ movies, setMovies }}>
          <BrowserRouter>
            <GlobalStyle />
            <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
          </BrowserRouter>
        </MoviesContext.Provider>
      </SearchContext.Provider>
    </>
  )
}

export default App