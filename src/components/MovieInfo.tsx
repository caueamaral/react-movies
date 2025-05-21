import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import getMovieById from '../services/getMovieById'
export default function MovieInfo() {
    const { id, title } = useParams()
    const [movie, setMovie] = useState<any>(null)

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const data = await getMovieById(id)
                setMovie(data)
            } catch(error) {
                console.log('Failed to fetch movie: ', error)
            }
        }
    
        fetchMovie()
    }, [id])


    return (
        <>
            {movie && (
                <article>
                    <section>
                        <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`} alt={movie.title} />
                        <h3>{movie.title}</h3>
                        <p>{movie.overview}</p>
                    </section>
                </article>
            )}
        </>
    )
}