//styles
import styles from './Signup.css'

export default function Signup() {
    return (
        <div className="signup-container">
            <h2>Signup</h2>
            <form>
                <label>
                    <span>Name:</span>
                    <input type="text" />
                </label>
                <label>
                    <span>Email:</span>
                    <input type="email" />
                </label>
                <label>
                    <span>Password</span>
                    <input type="password" />
                </label>
                <button className='btn'>Sign Up</button>
            </form>
        </div>
    )
}
