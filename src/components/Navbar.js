import { Link } from 'react-router-dom'
//hooks
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
//styles
import styles from './Navbar.css'

export default function Navbar() {
    const { error, logout } = useLogout()
    const { user } = useAuthContext()

    return (
        <nav className='navbar'>
            <ul>
                <li className='title'>
                    Budget Mate
                </li>
                {user && <li>
                    <Link to='/'>
                        Home
                    </Link>
                </li>}
                {!user &&
                    <>
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
                    </>}
                {user && <li onClick={() => logout()}>
                    <button className='btn'>Logout</button>
                </li>}
            </ul>
        </nav>
    )
}
