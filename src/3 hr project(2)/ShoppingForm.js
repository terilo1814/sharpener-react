import { useState } from 'react'
import './ShoppingForm.css'

export const ShoppingForm = ({ addData, showCartHandler,count }) => {

    const [shirt, setShirt] = useState('')
    const [desc, setDesc] = useState('')
    const [price, setPrice] = useState('')
    const [size, setSize] = useState({
        large: '',
        medium: '',
        small: ''
    })

    const submitHandler = (e) => {
        e.preventDefault()
        addData(shirt, desc, price, size)
        setShirt('')
        setDesc('')
        setPrice('')
        setSize({
            large: '',
            medium: '',
            small: ''
        })
    }

    const sizeHandler = (e) => {
        const { id, value } = e.target
        setSize({ ...size, [id]: value })

    }



    return (
        <form >
            <div className="form-group">
                <label htmlFor="shirt">Tshirt Name</label>
                <input type="text" className="form-control" id="shirt"
                    value={shirt}
                    onChange={(e) => setShirt(e.target.value)} />
            </div>

            <div className="form-group">
                <label htmlFor="description">Description</label>
                <input type="text" className="form-control" id="description"
                    value={desc}
                    onChange={(e) => { setDesc(e.target.value) }} />
            </div>

            <div className="form-group">
                <label htmlFor="price">Price</label>
                <input type="number" className="form-control" id="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)} />
            </div>

            <div className="form-group">
                <label htmlFor="quantity">Quantity available </label>
            </div>
            <div className='list-option'>
                <label htmlFor="large">L</label>
                <input type="number" id="large" value={size.large} onChange={sizeHandler} />

                <label htmlFor="medium">M</label>
                <input type="number" id="medium" value={size.medium} onChange={sizeHandler} />

                <label htmlFor="small">S</label>
                <input type="number" id="small" value={size.small} onChange={sizeHandler} />
            </div>

            <div>
                <button type="submit" className="btn btn-success" onClick={submitHandler}>Submit</button>
                <button type='button' className="cart-button" onClick={showCartHandler} >Add to Cart {count}</button>
            </div>
        </form>
    )
}
