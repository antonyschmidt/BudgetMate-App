//hooks
import { useRef, useState, useEffect } from 'react'
import { useFetch } from '../../hooks/useFetch'
// styles
import styles from './TransactionList.css'

export default function TransactionList({ totalSpending, setTotalSpending }) {
    const { data: transactions, error, isPending } = useFetch('http://localhost:3000/transactions')

    useEffect(() => {

        if (transactions) {

            setTotalSpending(0)

            let counter = 0

            transactions.map((transaction) => {
                counter = counter + transaction.price
            })

            setTotalSpending(counter)
        }

    }, [transactions])

    return (
        <ul className='card-container'>
            <h2>Transactions</h2>
            {isPending && <p className='loading'>Loading...</p>}
            {error && <p>{error}</p>}
            {transactions && transactions.map((transaction) => (
                <li key={transaction.id}>
                    <h3>{transaction.title}</h3>
                    <p>{transaction.price} $</p>
                </li>
            ))}
            <p className='total-spending'>Total Spending : <span>{totalSpending} $</span></p>
        </ul>
    )
}
