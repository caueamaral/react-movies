import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import NotFound from './pages/NotFound'
import { createGlobalStyle } from 'styled-components'
import './css/reset.css'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Rubik', sans-serif;
  }

  main {
      padding: 30px;
      margin-inline: auto;
      max-width: 1500px;
    }
`

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App