import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import getMovieById from '../services/getMovieById'

const StyledSection = styled.section`
    display: flex;
    gap: 20px;
`

const StyledImg = styled.img`
    width: 400px;
`

const StyledTitle = styled.h1`
    font-size: 30px;
    font-weight: 400;
`

const StyledReleaseDate = styled.div`
    color: #aaa;
    margin-top: 10px;
`

const StyledDescription = styled.p`
    line-height: 1.5em;
    margin-top: 30px;
`

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
                    <StyledSection>
                        <figure>
                            <StyledImg src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`} alt={movie.title} />
                        </figure>
                        <div>
                            <StyledTitle>
                                {movie.title}
                            </StyledTitle>
                            <StyledReleaseDate>
                                {movie.release_date}
                            </StyledReleaseDate>
                            <StyledDescription>
                                {movie.overview}
                            </StyledDescription>
                        </div>
                    </StyledSection>
                </article>
            )}
        </>
    )
}