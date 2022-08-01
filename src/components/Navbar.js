import { Link } from 'react-router-dom'
//hooks
import { useLogout } from '../hooks/useLogout'
//styles
import styles from './Navbar.css'

export default function Navbar() {
    const { error, logout } = useLogout()

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
                    <Link to='/login'>
                        Login
                    </Link>
                </li>
                <li>
                    <Link to='/signup'>
                        Signup
                    </Link>
                </li>
                <li onClick={() => logout()}>
                    <button className='btn'>Logout</button>
                </li>
            </ul>
        </nav>
    )
}
