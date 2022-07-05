import { Link } from 'react-router-dom'
//styles
import styles from './Navbar.css'

export default function Navbar() {
    return (
        <nav className='navbar'>
            <ul>
                <li className='title'>
                    <Link to='/'>
                        Budget Mate
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='/show'>
                        Show
                    </Link>
                </li>
                <li>
                    <Link to='/login'>
                        Login
                    </Link>
                </li>
                <li>
                    <Link to='/signup'>
                        Signup
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
