import styled from 'styled-components'
import Navigation from './Navigation'

const StyledHeader = styled.header`
    background-color: #444;
    color: #fff;
    padding: 15px;
`

export default function Header() {
    return (
        <StyledHeader>
            <Navigation />
        </StyledHeader>
    )
}