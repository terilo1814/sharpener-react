import { useState } from 'react'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'
import Card from '../UI/Card'
// import ExpenseFilter from './ExpenseFilter'

const ExpenseItem = ({ amount, date, id, title, location }) => {

    const [curr_amount, setAmount] = useState(amount)

    const editHandler = () => {
        setAmount('100')
        console.log(curr_amount)
    }

    const deleteHandler = () => {
        const result = document.getElementById(id)
        result.remove()
    }



    return (
        <Card className='expense-item' id_value={id}>
            <ExpenseDate date={date} />
            <div className='expense-item__description'>
                <h2>{title} {location}</h2>
                <div className='expense-item__price'>${curr_amount}</div>
            </div>
            <button class='delete' onClick={deleteHandler}>Delete Expense</button>
            <button class='edit' onClick={editHandler}>Change Expense</button>
        </Card>

    )
}
export default ExpenseItem