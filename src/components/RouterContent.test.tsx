import { vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import Movies from '../pages/Movies'
import Search from './Search'
import { SearchContext } from '../App'

test('sets search input from route param /search/hunger-games', async () => {
    const setSearchMock = vi.fn()
    const searchContextValue = {
        search: 'Hunger games',
        setSearch: setSearchMock
    }

    render(
        <MemoryRouter initialEntries={['/search/hunger-games']}>
            <SearchContext.Provider value={searchContextValue}>
                <Routes>
                    <Route path="/search/:query" element={<>
                        <Search />
                        <Movies />
                    </>} />
                </Routes>
            </SearchContext.Provider>
        </MemoryRouter>
    )

    await waitFor(() => {
        expect(setSearchMock).toHaveBeenCalledWith('Hunger games')
        expect(screen.getByDisplayValue(/Hunger games/i)).toBeInTheDocument()
    })
})