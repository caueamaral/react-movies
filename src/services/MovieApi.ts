import axios from 'axios'

export default function MovieApi(query: string) {
    const endpoint = `https://api.themoviedb.org/3/search/movie?query=${query}`

    const headers = {
        'Authorization': `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`
    }

    const response = axios.get(endpoint, { headers })

    return response
}