import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import getMovieById from '../services/getMovieById'
import releaseYear from '../functions/releaseYear'

const StyledSection = styled.section`
    display: flex;
    gap: 30px;
`

const StyledImg = styled.img`
    width: 400px;
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

const StyledOverview = styled.p`
    line-height: 1.6em;
    margin-top: 40px;
`

const StyledOverviewTitle = styled.p`
    font-size: 1.1em;
    font-weight: 400;
    margin-bottom: 5px;
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
                            <StyledOverview>
                                <StyledOverviewTitle>Overview</StyledOverviewTitle>
                                {movie.overview}
                            </StyledOverview>
                        </div>
                    </StyledSection>
                </article>
            )}
        </>
    )
}