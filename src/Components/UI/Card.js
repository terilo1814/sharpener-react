import './Card.css'

const Card = ({ id_value, className, children }) => {
    const classes = 'card ' + className
    return (
        <div className={classes} id={id_value}>{children}</div>
    )
}
export default Card