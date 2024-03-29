
import classes from './Header.module.css'
import meals from '../../assets/meals.jpg'
import { HeaderCartButton } from './HeaderCartButton'


export const Header = (props) => {
    return (
        <>
            <header className={classes.header}>
                <h1>Meals</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={meals} alt='A table full of delicious food' />
            </div>
        </>
    )
}
