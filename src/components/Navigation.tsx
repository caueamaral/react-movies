import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledLink = styled(Link)`
    color: currentColor;
    display: inline-block;
    padding: 15px;
    text-decoration: none;

    &:hover {
        background: #fff2;
    }
`

export default function Navigation() {
    return (
        <nav>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/favorites">Favorites</StyledLink>
        </nav>
    )
}