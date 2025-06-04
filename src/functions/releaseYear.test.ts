import releaseYear from './releaseYear'

test('extracts year "2025" from "2025-05-17"', () => {
    expect(releaseYear('2025-05-17')).toBe('2025')
})