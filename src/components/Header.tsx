import styled from 'styled-components'
import Logo from './Logo'
import Navigation from './Navigation'

const StyledHeader = styled.header`
    align-items: center;
    background-color: #444;
    color: #fff;
    display: flex;
    justify-content: space-between;
    padding: 20px 30px;
`

export default function Header() {
    return (
        <StyledHeader>
            <Logo />
            <Navigation />
        </StyledHeader>
    )
}