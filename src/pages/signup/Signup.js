import { useState } from 'react'
//hooks
import { useSignup } from '../../hooks/useSignup'
//styles
import styles from './Signup.css'

export default function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { error, signupUser } = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await signupUser(email, password)

        setEmail('')
        setPassword('')
    }

    return (
        <div className="signup-container">
            <h2>Signup</h2>
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
                <button className='btn'>Sign Up</button>
                {error && <p className='error'>{error}</p>}
            </form>
        </div>
    )
}
