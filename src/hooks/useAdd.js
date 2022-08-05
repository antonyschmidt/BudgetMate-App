import { useState } from 'react'
//firebase
import { db } from '../firebase/config'
import { collection, addDoc } from 'firebase/firestore'

export const useAdd = (c) => {
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)

    const addTransaction = (title, price, uid) => {
        setIsPending(true)
        setError(false)

        const ref = collection(db, c)

        addDoc(ref, { title, price, uid })
            .then((res) => {
                if (!res) {
                    throw new Error('Failed to add new Transaction')
                }

                setIsPending(false)
            })
            .catch((err) => {
                console.log(err.message)
                setError(err.message)
                setIsPending(false)
            })
    }
    return { error, isPending, addTransaction }
}