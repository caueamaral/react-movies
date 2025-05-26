import axios from 'axios'

export default function getMovies(page: string) {
    const documentary = 99

    const headers = {
        'Authorization': `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`
    }

    const params = {
        page,
        include_video: false,
        language: 'en-US',
        without_genres: documentary,
        sort_by: 'popularity.desc',
        include_adult: false,
        'certification_country': 'US',
        'certification.lte': 'R',
    }

    const endpoint = `https://api.themoviedb.org/3/discover/movie`

    const response = axios.get(endpoint, {
        headers,
        params
    })

    return response
}