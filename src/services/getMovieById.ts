import axios from 'axios'

export default async function getMovieById(query: string | undefined) {
    const endpoint = `https://api.themoviedb.org/3/movie/${query}`

    const headers = {
        'Authorization': `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`
        
    }

    const response = await axios.get(endpoint, { headers })

    return response.data
}