import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const StyledUl = styled.ul`
    display: flex;
    gap: 20px;
`

const StyledNavLink = styled(NavLink)`
    color: currentColor;
    display: block;
    padding-block: 5px;
    text-decoration: none;
    text-transform: uppercase;

    &.active {
        border-bottom: 1px solid;
        pointer-events: none;
    }
`

export default function Navigation() {
    return (
        <nav>
            <StyledUl>
                <li>
                    <StyledNavLink to="/">Home</StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to="/favorites">Favorites</StyledNavLink>
                </li>
            </StyledUl>
        </nav>
    )
}