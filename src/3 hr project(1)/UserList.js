import React from 'react'
import './UserList.css'

export const UserList = ({ dataList, removeData, table }) => {

    return (
        <ul>
            {dataList.map((item) => (
                item.table === table &&
                <li className='list-item' key='id'>
                    {item.id} - {item.price} - {item.dish}
                    <button className='btn' onClick={() => removeData(item.id)}>  Delete</button>
                </li>
            ))}
        </ul>
    )
}
