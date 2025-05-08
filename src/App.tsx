import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createContext, useState } from 'react'
import { GlobalStyle } from './components/GlobalStyle'
import Header from './components/Header'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import NotFound from './pages/NotFound'
import './css/reset.css'

export const SearchContext = createContext<{ search: string; setSearch: (search: string) => void }>({
  search: '',
  setSearch: () => {}
})

function App() {
  const [search, setSearch] = useState('')

  return (
    <>
      <SearchContext.Provider value={{ search, setSearch }}>
        <BrowserRouter>
          <GlobalStyle />
          <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
      </SearchContext.Provider>
    </>
  )
}

export default App