import { useState } from 'react'
//firebase
import { db } from '../firebase/config'
import { doc, deleteDoc } from 'firebase/firestore'

export const useDelete = (c) => {
    const [error, setError] = useState(null)

    const deleteTransaction = (id) => {
        const docRef = doc(db, c, id)

        deleteDoc(docRef)
            .then((res) => {
                console.log('Successfully deleted!')
            })
            .catch((err) => {
                setError(err.message)
            })
    }
    return { error, deleteTransaction }
}