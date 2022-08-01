import { useDelete } from '../../hooks/useDelete'
// styles
import styles from './TransactionList.css'

export default function TransactionList({ totalSpending, transactions, isPending }) {
    const { error, deleteTransaction } = useDelete('transactions')

    return (
        <ul className='card-container'>
            <h2>Transactions</h2>
            {isPending && <p className='loading'>Loading...</p>}
            {error && <p>{error} - error</p>}
            {transactions && transactions.map((transaction) => (
                <li key={transaction.id}>
                    <h3>{transaction.title}</h3>
                    <p>{transaction.price} $</p>
                    <div className='delete' onClick={() => deleteTransaction(transaction.id)}>x</div>
                </li>
            ))}
            <p className='total-spending'>Total Spending : <span>{totalSpending} $</span></p>
        </ul>
    )
}
