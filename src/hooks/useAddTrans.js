import { useState, useEffect } from "react"

export const useAddTrans = () => {
    const [isPending, setIsPending] = useState(null)
    const [error, setError] = useState(null)

    const addTransaction = async (title, price, url) => {
        setIsPending(true)
        setError(null)

        try {
            const body = { title: title, price: price }

            const res = await fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    title: title,
                    price: parseFloat(price),

                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })

            if (!res) {
                throw new Error('Could not fetch data!')
            }

            setIsPending(false)
        } catch (err) {
            console.log(err)
            setError(err)
            setIsPending(false)
        }


    }

    return { isPending, error, addTransaction }
}