import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import getMovieById from '../services/getMovieById'
import releaseYear from '../functions/releaseYear'

const slideIn = keyframes`
    from {
        opacity: 0;
        transform: translateX(100px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`

const StyledSection = styled.section`
    animation: ${slideIn} 0.5s ease-out forwards;

    @media (min-width: 768px) {
        display: flex;
        gap: 30px;
    }
`

const StyledImg = styled.img`
    border-radius: 5px;
    width: 100%;

    @media (min-width: 768px) {
        width: 400px;
    }
`

const StyledInfo = styled.div`
    @media (max-width: 767px) {
        margin-top: 20px;
    }
`

const StyledTitle = styled.h1`
    font-size: 30px;
`

const StyledTitleText = styled.span`
    font-weight: 400;
`

const StyledTitleYear = styled.span`
    color: #aaa;
    margin-left: 10px;
`

const StyledReleaseDate = styled.div`
    color: #aaa;
    margin-top: 10px;
`

const StyledTagline = styled.div`
    color: #aaa;
    margin-top: 40px;
`

const StyledOverview = styled.div`
    line-height: 1.6em;
    margin-top: 40px;
`

const StyledOverviewTitle = styled.h2`
    font-size: 1.2em;
    font-weight: 400;
`

export default function MovieInfo() {
    const { id } = useParams()
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
                        <StyledInfo>
                            <StyledTitle>
                                <StyledTitleText>
                                    {movie.title}
                                </StyledTitleText>
                                <StyledTitleYear>
                                    ({releaseYear(movie.release_date)})
                                </StyledTitleYear>
                            </StyledTitle>
                            <StyledReleaseDate>
                                {movie.release_date}
                            </StyledReleaseDate>
                            <StyledTagline>
                                {movie.tagline && `"${movie.tagline}"`}
                            </StyledTagline>
                            {movie.overview && (
                                <StyledOverview>
                                    <StyledOverviewTitle>Overview</StyledOverviewTitle>
                                    <p>
                                        {movie.overview}
                                    </p>
                                </StyledOverview>
                            )}
                        </StyledInfo>
                    </StyledSection>
                </article>
            )}
        </>
    )
}