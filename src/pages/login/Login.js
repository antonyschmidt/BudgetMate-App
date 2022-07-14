//styles
import styles from './Login.css'

export default function Login() {
    return (
        <div className="login-container">
            <h2>Login</h2>
            <form>
                <label>
                    <span>Email:</span>
                    <input type="email" />
                </label>
                <label>
                    <span>Password:</span>
                    <input type="password" />
                </label>
                <button className='btn'>Login</button>
            </form>
        </div>
    )
}
