import { useLocation, Link } from "react-router-dom"

function Header() {
    const location = useLocation()

    return(
        <div className='header'>
            <h1 className="welcome">Welcome to the Shop!</h1>
            <p className='nav-button'>{location.pathname === '/' ? <Link to='/cart'>Cart</Link> : <Link to='/'>Back</Link>}</p>
        </div>
    )
}

export default Header