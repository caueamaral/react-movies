import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const StyledNavLink = styled(NavLink)`
    color: currentColor;
    display: inline-block;
    padding: 15px;
    text-decoration: none;

    &.active {
        background: #fff2;
        pointer-events: none;
    }
`

export default function Navigation() {
    return (
        <nav>
            <StyledNavLink to="/">Home</StyledNavLink>
            <StyledNavLink to="/favorites">Favorites</StyledNavLink>
        </nav>
    )
}