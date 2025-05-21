import styled from 'styled-components'
import Logo from './Logo'
import Search from './Search'
import Navigation from './Navigation'

const StyledHeader = styled.header`
    align-items: center;
    background-color: #444;
    color: #fff;
    display: flex;
    padding-inline: 30px;

    @media (max-width:799px) {
        flex-direction: column;
        padding-block: 30px;
        height: var(--headerHeightMobile);
        gap: 20px;
    }

    @media (min-width:800px) {
        height: var(--headerHeightDesktop);
        justify-content: space-between;
    }
`

const StyledLink = styled.a`
    color: currentColor;
    text-decoration: none;
`

const StyledSection = styled.section`
    align-items: center;
    display: flex;
    
    @media (max-width:799px) {
        flex-direction: column;
        gap: 20px;
    }

    @media (min-width:800px) {
        gap: 50px;
    }
`

export default function Header() {
    return (
        <StyledHeader>
            <StyledLink href="/">
                <Logo />
            </StyledLink>
            <StyledSection>
                <Search />
                <Navigation />
            </StyledSection>
        </StyledHeader>
    )
}