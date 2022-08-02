import { useState } from "react"
//firebase
import { auth } from '../firebase/config'
import { signOut } from "firebase/auth"
//hooks
import { useAuthContext } from './useAuthContext'

export const useLogout = () => {
    const [error, setError] = useState(null)
    const { dispatch } = useAuthContext()

    const logout = () => {

        signOut(auth).then((res) => {
            dispatch({ type: 'LOG_OUT' })
            console.log('Logged out')
        }).catch((err) => {
            setError(err.message)
            console.log(err.message)
        })
    }

    return { error, logout }
}