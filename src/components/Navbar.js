import { Link } from 'react-router-dom'
//styles
import styles from './Navbar.css'

export default function Navbar() {
    const handleClick = () => {

    }

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
                    <Link to='/addtransaction'>
                        Add Trans -
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
                <li>
                    <button className='btn' onClick={handleClick}>Logout</button>
                </li>
            </ul>
        </nav>
    )
}
