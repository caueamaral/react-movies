import styled from 'styled-components'
import Logo from './Logo'
import Search from './Search'
import Navigation from './Navigation'

const StyledHeader = styled.header`
    align-items: center;
    background-color: #444;
    color: #fff;
    display: flex;
    justify-content: space-between;
    padding-inline: 30px;

    @media (max-width:799px) {
        flex-direction: column;
        padding-block: 30px;
        gap: 20px;
    }
`

const StyledSection = styled.section`
    align-items: center;
    display: flex;
    
    @media (max-width:799px) {
        flex-direction: column;
        gap: 20px;
        height: var(--headerHeightMobile);
    }

    @media (min-width:800px) {
        gap: 50px;
        height: var(--headerHeightDesktop);
    }
`

export default function Header() {
    return (
        <StyledHeader>
            <Logo />
            <StyledSection>
                <Search />
                <Navigation />
            </StyledSection>
        </StyledHeader>
    )
}