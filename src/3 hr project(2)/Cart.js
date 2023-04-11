import './Cart.css'
import { Modal } from './Modal'

export const Cart = (props) => {

    // const cartItems =(props.cartList) ? props.cartList.map((item) => (<li className='list-items'>{item.shirt}</li>)) : ''
    // console.log(props.cartList)
    return (
        <Modal>
            {props.cartList && props.cartList.map((item) => {
                if (item.size.large || item.size.medium || item.size.small) {
                    return <li className='list-items'>
                        {item.shirt} {item.size.large ? `${item.size.large} L`:''} {item.size.medium ? `${item.size.medium} M`:''}
                        {item.size.small ? `${item.size.small} S`:''}
                    </li>
                }

            })}
            <div className='total'>
                <span>Total Amount </span>
                <span>{props.totalAmount}</span>
            </div>
            <div className="button">
                <button onClick={props.hideCartHandler}>Close</button>
                <button>Order</button>
            </div>
        </Modal>
    )
}
