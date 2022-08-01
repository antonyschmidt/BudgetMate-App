import { useState } from 'react'
//firebase
import { auth } from '../firebase/config'
import { createUserWithEmailAndPassword } from 'firebase/auth'

export const useSignup = () => {
    const [error, setError] = useState(null)

    const signupUser = (email, password) => {

        createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                if (!res) {
                    throw new Error('SignUp failed!')
                }

                console.log('Successfully logged in:', res.user)
            })
            .catch((err) => {
                setError(err.message)
            })
    }
    return { error, signupUser }
}