import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import { useState } from 'react'

const NewExpense = ({ onAddExpense }) => {

    const [isEditing, setIsEditig] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData) => {

        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        onAddExpense(expenseData)
    }

const startEditingHandler=()=>{
    setIsEditig(true)
}
const stopEditingHandler=()=>{
    setIsEditig(false)
}
    return (
        <div className='new-expense' >
            {!isEditing && <button onClick={startEditingHandler}>Add new Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} stopEditingHandler={stopEditingHandler}/>}
        </div>
    )
}
export default NewExpense