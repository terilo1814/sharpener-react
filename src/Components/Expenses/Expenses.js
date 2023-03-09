import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css'
import { useState, useEffect } from 'react';

const Expenses=({expenseList}) =>{

    const [filteredYear,setFilteredYear]=useState('2020')
    
        const filterChangeHandler=selectedYear=>{
            setFilteredYear(selectedYear)
        }

    const [eList,setEList]=useState([])

    useEffect(()=>{
        if(expenseList){
            const result=[...eList]   
            result.push(expenseList)
            setEList(result)
        }
    },[expenseList])

    const expenses=[
        {
            id: 'e1',
            title: 'Toilet Paper',
            amount: 94.12,
            date: new Date(2020, 7, 14),
            LocationOfExpenditure: 'Bangalore',
        },
        { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12), LocationOfExpenditure: 'Delhi', },
        {
            id: 'e3',
            title: 'Car Insurance',
            amount: 294.67,
            date: new Date(2021, 2, 28),
            LocationOfExpenditure: 'Chennai',
        },
        {
            id: 'e4',
            title: 'New Desk (Wooden)',
            amount: 450,
            date: new Date(2021, 5, 12),
            LocationOfExpenditure: 'Mumbai',
        },
    ];
   
    return (
        <Card className="expenses">
             <ExpenseFilter selected={filteredYear} onChangefilter={filterChangeHandler}/>
            
            {eList.map(expense=>(
                <ExpenseItem title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                    id={expense.id} >
                </ExpenseItem>
            ))}
            {expenses.map(expense => (
                <ExpenseItem title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                    location={expense.LocationOfExpenditure}
                    id={expense.id} >
                    
                </ExpenseItem>
            ))}
        </Card>)
}
export default Expenses
