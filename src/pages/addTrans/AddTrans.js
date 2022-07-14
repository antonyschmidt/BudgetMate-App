// styles
import styles from './AddTrans.css'

export default function AddTrans() {
    return (
        <div className='add-trans-container'>
            <h2>New Transaction</h2>
            <form>
                <label>
                    <span>Title</span>
                    <input placeholder='Enter a Title' type="text" />
                </label>
                <label>
                    <span>Price <small>$</small></span>
                    <input placeholder='Enter a Price' type="number" />
                </label>
                <button className='btn'>Add Item</button>
            </form>
        </div>
    )
}
