//hooks
import { useRef, useEffect, useState } from 'react'
import { useCollection } from '../../hooks/useCollection'
//styles
import styles from './Home.css'
//components
import BalanceBox from './BalanceBox'
import TransactionList from './TransactionList'
import AddTrans from './AddTrans'

export default function Home() {
    const [balance, setBalance] = useState(300)
    const [totalSpending, setTotalSpending] = useState(0)
    const { documents: transactions, isPending, error } = useCollection('transactions')

    return (
        <div className='homepage'>
            {transactions &&
                <>
                    <div className='sidebar-container'>
                        <BalanceBox balance={balance} />
                        <AddTrans />
                    </div>
                    <TransactionList transactions={transactions} error={error} isPending={isPending} totalSpending={totalSpending} />
                </>
            }
        </div>
    )
}
