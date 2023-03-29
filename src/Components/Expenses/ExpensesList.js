import './ExpensesList.css'
import ExpenseItem from './ExpenseItem'

const ExpensesList = ({ filteredExpense }) => {

    if (filteredExpense.length === 0) {
        return <h2 className='expense-list__fallback'>Found no Expenses</h2>
    }
    else if (filteredExpense.length === 1) {
        return <h2 className='expense-list__fallback'>Only single Expense here. Please add more...</h2>
    }

    return <ul className='expense-list'>
        {filteredExpense.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
                id={expense.id}
            />
        ))}
    </ul>
}
export default ExpensesList
