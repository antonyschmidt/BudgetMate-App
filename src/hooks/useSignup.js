import { useState } from 'react'
//firebase
import { auth } from '../firebase/config'
import { createUserWithEmailAndPassword } from 'firebase/auth'
//hooks
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
    const [error, setError] = useState(null)
    const { dispatch } = useAuthContext()

    const signupUser = (email, password) => {

        createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {

                if (!res) {
                    throw new Error('SignUp failed!')
                }

                dispatch({ type: 'SIGN_IN', payload: res.user })
                console.log('Successfully logged in:', res.user)
            })
            .catch((err) => {
                setError(err.message)
            })
    }
    return { error, signupUser }
}