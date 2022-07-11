import { useState, useEffect } from "react"

export const useFetch = (url) => {
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)
    const [data, setData] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            setIsPending(true)
            setError(null)

            try {
                const res = await fetch(url)

                if (!res.ok) {
                    throw new Error('Could not fetch data!')
                }

                const dta = await res.json()

                setData(dta)
                setError(null)
                setIsPending(false)
            } catch (err) {
                console.log(err)
                setError(err)
                setIsPending(false)
            }
        }

        fetchData()
    }, [url])


    return { data, error, isPending }
}