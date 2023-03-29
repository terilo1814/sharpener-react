import './ErrorModal.css'



export const ErrorModal = (props) => {
    return (
        <div>
            <header>
                <h2>{props.title}</h2>
            </header>
            <div>
                <p>{props.message}</p>
            </div>
            <footer>
                <button type='submit' className='button' onClick={props.onConfirm}>Okay</button>
            </footer>
        </div>
    )
}
