import './RestaurantForm.css'
import { useState } from 'react'

export const RestaurantForm = ({addData}) => {

    const [userId, setUserId] = useState('')
    const [userPrice, setUserPrice] = useState('')
    const [userDish, setUserDish] = useState('')
    const [userTable,setUserTable]=useState('1')
   

    const submitHandler = (e) => {
        e.preventDefault()
        setUserId('')
        setUserPrice('')
        setUserDish('')

        addData(userId,userPrice,userDish,userTable)
    }

    const idHandler = (e) => {
        setUserId(e.target.value)

    }
    const priceHandler = (e) => {
        setUserPrice(e.target.value)

    }
    const dishHandler = (e) => {
        setUserDish(e.target.value)

    }
    const tableHandler=(e) =>{
        setUserTable(e.target.value)
        console.log(e.target.value)
    }

    
    return (
        <form onSubmit={submitHandler}>
            <div className='form-group'>
                <label htmlFor='order_id'>Order ID: </label>
                <input type='number' id='order_id' value={userId} onChange={idHandler} required />
            </div>

            <div className='form-group'>
                <label htmlFor='price'>Price: </label>
                <input type='number' id='price' value={userPrice} onChange={priceHandler} required />
            </div>

            <div className='form-group'>
                <label htmlFor='dish'>Dish: </label>
                <input type='text' id='text' value={userDish} onChange={dishHandler} required />
            </div>

            <div className='form-group'>
                <label htmlFor='table' >Choose a Table: </label>
                <select onChange={tableHandler} id='table' >
                    <option value='1'>Table 1</option>
                    <option value='2'>Table 2</option>
                    <option value='3'>Table 3</option>
                </select>
            </div>
            <button className='button'>Add to bill</button>
           
            

          
        </form>
    )
}
