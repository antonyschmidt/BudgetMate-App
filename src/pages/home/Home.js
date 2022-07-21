//hooks
import { useRef, useEffect, useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
//styles
import styles from './Home.css'
//components
import BalanceBox from './BalanceBox'
import TransactionList from './TransactionList'
import AddTrans from './AddTrans'

export default function Home() {
    const [balance, setBalance] = useState(300)
    const [totalSpending, setTotalSpending] = useState(0)
    const url = 'http://localhost:3000/transactions'
    const { data: transactions, error, isPending } = useFetch(url)

    // useEffect(() => {
    //     setBalance(300)
    //     setTotalSpending(0)
    // }, [])

    const _balance = useRef(balance)

    useEffect(() => {
        if (totalSpending) {
            const newNumber = _balance.current - totalSpending
            setBalance(newNumber)
        }
    }, [_balance, totalSpending])

    return (
        <div className='homepage'>
            {transactions &&
                <>
                    <div className='sidebar-container'>
                        <BalanceBox balance={balance} />
                        <AddTrans url={url} />
                    </div>
                    <TransactionList error={error} isPending={isPending} transactions={transactions} url={url} totalSpending={totalSpending} setTotalSpending={setTotalSpending} />
                </>
            }
        </div>
    )
}
