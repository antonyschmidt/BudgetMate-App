import { useState } from 'react'
//hooks
import { useLogin } from '../../hooks/useLogin'
//styles
import styles from './Login.css'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { error, loginUser } = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await loginUser(email, password)

        setEmail('')
        setPassword('')
    }

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Email:</span>
                    <input
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </label>
                <label>
                    <span>Password</span>
                    <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </label>
                <button className='btn'>Login Up</button>
                {error && <p className='error'>{error}</p>}
            </form>
        </div>
    )
}
