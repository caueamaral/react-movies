import styled from 'styled-components'
import Card from './Card'

const StyledArticle = styled.article`
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`

export default function Cards() {
    return (
        <StyledArticle>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </StyledArticle>
    )
}