import axios from 'axios'

export default function getMovies(page: number) {
    const endpoint = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`

    const headers = {
        'Authorization': `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`
    }

    const response = axios.get(endpoint, { headers })

    return response
}