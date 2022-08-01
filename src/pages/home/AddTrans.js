import { useState } from 'react'
//hooks
import { useAdd } from '../../hooks/useAdd'
// styles
import styles from './AddTrans.css'

export default function AddTrans() {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const { error, isPending, addTransaction } = useAdd('transactions')

    const handleSubmit = (e) => {
        e.preventDefault()

        addTransaction(title, price)

        setTitle('')
        setPrice('')
    }

    return (
        <div className='add-trans-container'>
            <h2>New Transaction</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>
                    <span>Title</span>
                    <input placeholder='Enter a Title'
                        type="text"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                </label>
                <label>
                    <span>Price <small>$</small></span>
                    <input placeholder='Enter a Price'
                        type="number"
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                    />
                </label>
                <button className='btn'>Add Item</button>
            </form>
        </div>
    )
}
