import { onSnapshot, collection } from 'firebase/firestore'
//hooks
import { useState, useEffect } from "react"
//database
import { db } from '../firebase/config'

export const useCollection = (c) => {
    const [documents, setDocuments] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setIsPending(true)

        const ref = collection(db, c)

        const unsub = onSnapshot(ref, (snapshot) => {
            let results = []
            snapshot.docs.forEach((doc) => {
                results.push({ id: doc.id, ...doc.data() })
            })

            setDocuments(results)
            setIsPending(false)
            setError(null)
        }, (error) => {
            setError('Could not fetch data')
            console.log(error.message)
            setIsPending(false)
        })

        return () => unsub()
    }, [c])

    return { documents, isPending, error }
}