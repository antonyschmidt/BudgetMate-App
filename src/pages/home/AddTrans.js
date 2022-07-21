import { useState } from 'react'
//hooks
import { useAddTrans } from '../../hooks/useAddTrans'
// styles
import styles from './AddTrans.css'

export default function AddTrans({ url }) {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const { addTransaction, error, isPending } = useAddTrans()

    const handleSubmit = (e) => {
        e.preventDefault()

        addTransaction(title, price, url)

        setTitle('')
        setPrice('')
        location.reload()
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
                {!isPending && <button className='btn'>Add Item</button>}
                {isPending && <button className='btn' disabled>Loading...</button>}
                {error && <p>{error}</p>}
            </form>
        </div>
    )
}
