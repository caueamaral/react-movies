import { Link } from 'react-router-dom'

export default function Navigation() {
    return (
        <nav>
            <Link to="/">Home</Link>
            &nbsp; | &nbsp;
            <Link to="/favorites">Favorites</Link>
        </nav>
    )
}