import classes from './MealItemForm.module.css'
import { Input } from '../../UI/Input'

import React from 'react'

export const MealItemForm = () => {
    return (
        <form className={classes.form}>
            <Input label='Amount'
                input={{
                    id: 'amount',
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1'
                }}
            />
            <button>+ Add</button>
        </form>
    )
}
