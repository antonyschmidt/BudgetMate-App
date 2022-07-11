//hooks
import { useRef, useEffect, useState } from 'react'
//styles
import styles from './Home.css'
//components
import BalanceBox from './BalanceBox'
import TransactionList from './TransactionList'

export default function Home() {
    const [balance, setBalance] = useState(300)
    const [totalSpending, setTotalSpending] = useState(0)

    const _balance = useRef(balance)

    useEffect(() => {
        if (totalSpending) {
            const newNumber = _balance.current - totalSpending
            setBalance(newNumber)
        }
    }, [_balance, totalSpending])

    return (
        <div className='homepage'>
            <BalanceBox balance={balance} />
            <TransactionList totalSpending={totalSpending} setTotalSpending={setTotalSpending} />
        </div>
    )
}
