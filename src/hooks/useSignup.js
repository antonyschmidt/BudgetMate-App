import { useState } from 'react'
//firebase
import { auth } from '../firebase/config'
import { createUserWithEmailAndPassword } from 'firebase/auth'

export const useSignup = () => {
    const [user, setUser] = useState('')
    const [error, setError] = useState(null)

    const createUser = (email, password) => {

        createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('SignUp failed!')
                }

                setUser(res.user)
            })
            .catch((err) => {
                setError(err.message)
            })
    }
    return { user, error, createUser }
}