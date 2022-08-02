import { useState } from 'react'
//firebase
import { auth } from '../firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'
//hooks
import { useAuthContext } from '../hooks/useAuthContext'

export const useLogin = () => {
    const [error, setError] = useState(null)
    const { dispatch } = useAuthContext()

    const loginUser = (email, password) => {

        signInWithEmailAndPassword(auth, email, password)
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
    return { error, loginUser }
}