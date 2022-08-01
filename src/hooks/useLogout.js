import { useState } from "react"
//firebase
import { auth } from '../firebase/config'
import { signOut } from "firebase/auth"

export const useLogout = () => {
    const [error, setError] = useState(null)

    const logout = () => {
        console.log('function fires!')

        signOut(auth).then((res) => {
            console.log('Logged out:')
        }).catch((err) => {
            setError(err.message)
            console.log(err.message)
        })
    }

    return { error, logout }
}