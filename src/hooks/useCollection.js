import { onSnapshot, collection, query, where } from 'firebase/firestore'
//hooks
import { useState, useEffect, useRef } from "react"
//database
import { db } from '../firebase/config'
import { useAuthContext } from './useAuthContext'

export const useCollection = (c, q) => {
    const [documents, setDocuments] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)
    const { user } = useAuthContext()

    const _query = useRef(q).current

    useEffect(() => {
        setIsPending(true)

        let ref = collection(db, c)

        if (_query) {
            ref = query(ref, where(..._query))
        }

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