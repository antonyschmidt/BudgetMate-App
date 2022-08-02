import { computeHeadingLevel } from "@testing-library/react";
import { ActionCodeOperation, onAuthStateChanged } from "firebase/auth";
import { useReducer, createContext, useEffect } from "react";
//firebase
import { auth } from "../firebase/config";

export const AuthContext = createContext()

const authReducer = (state, action) => {
    switch (action.type) {
        case 'AUTH_READY':
            return { ...state, user: action.payload, authReady: true }
        case 'SIGN_IN':
            return { ...state, user: action.payload }
        case 'SIGN_OUT':
            return { ...state, user: null }
        default:
            return state
    }
}

export const AuthContextProvider = (({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null,
        authReady: false
    })

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            dispatch({ type: 'AUTH_READY', payload: user })
        })

    }, [])

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
})
