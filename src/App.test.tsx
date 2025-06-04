import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'
import App from './App';
import Navigation from './components/Navigation'

describe('renders the components', () => {
  test('deliberately break test tro verify CI failure', () => {
    expect(true).toBe(false)
  })

  test('renders logo', () => {
    render(<App />)
    expect(screen.getByText(/movies/i)).toBeInTheDocument()
  })

  test('renders navigation', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    )
    expect(screen.getByText(/home/i)).toBeInTheDocument()
    expect(screen.getByText(/favorites/i)).toBeInTheDocument()
  })
})