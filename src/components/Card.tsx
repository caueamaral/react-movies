import styled from 'styled-components'

const StyledSection = styled.section`
    border: 1px solid #999;
`

const StyledImg = styled.img`
    width: 100%;
`

export default function Card() {
    return (
        <StyledSection>
            <figure>
                <StyledImg src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/2hTPkBiXoMmrdtYgHtB9WU5dg80.jpg" alt="Hunger Games" />
                <figcaption>Hunger Games</figcaption>
            </figure>
        </StyledSection>
    )
}