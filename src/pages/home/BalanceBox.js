import { useState } from 'react'
//styles
import styles from './BalanceBox.css'

export default function BalanceBox({ balance }) {

    return (
        <div className='balance-box'>
            <h2>Balance</h2>
            <h3>Total Amount</h3>
            <p>{balance}$</p>
        </div>
    )
}
