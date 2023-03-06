import './Card.css'

const Card = ({ id, className, children }) => {
    const classes = 'card ' + className
    return (
        <div className={classes} id={id}>{children}</div>
    )
}
export default Card