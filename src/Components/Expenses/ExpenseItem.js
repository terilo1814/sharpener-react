import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'
import Card from '../UI/Card'



const ExpenseItem = ({ amount, date, id, title, location }) => {
    const editHandler = () => {
        console.log('Edited')
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
                <div className='expense-item__price'>${amount}</div>
            </div>
            <button class='delete' onClick={deleteHandler}>Delete Expense</button>
            <button class='edit' onClick={editHandler}>Edit</button>
        </Card>

    )
}
export default ExpenseItem