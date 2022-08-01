import { useState } from 'react'
//firebase
import { auth } from '../firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'

export const useLogin = () => {
    const [error, setError] = useState(null)

    const loginUser = (email, password) => {

        signInWithEmailAndPassword(auth, email, password)
            .then((res) => {

                console.log('Successfully logged in:', res.user)
            })
            .catch((err) => {
                setError(err.message)
            })
    }
    return { error, loginUser }
}