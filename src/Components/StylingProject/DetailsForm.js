import './DetailsForm.css'
import { useState, useRef } from 'react'

export const DetailsForm = (props) => {
    const nameRef = useRef('')
    const ageRef = useRef('')



    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [college, setCollege] = useState('')


    const submitHandler = (e) => {
        e.preventDefault()
        console.log(nameRef.current.value)
        console.log(ageRef.current.value)
        
        if (name.trim().length === 0 || age.trim().length === 0 || college.trim().length === 0) {
            alert('No blank is allowed')

        }
        if (+age < 0) {
            alert('Age should not be negative')

        }
        props.addData(name, age, college)
        setName('')
        setAge('')
        setCollege('')
    }

    const nameHandler = (e) => {
        setName(e.target.value)
    }

    const ageHandler = (e) => {
        setAge(e.target.value)
    }

    const placeHandler = (e) => {
        setCollege(e.target.value)
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='container'>

                <div className="form-group">
                    <label htmlFor="name">Username</label>
                    <input type="text" className="form-control" id="name" value={name} onChange={nameHandler}
                        ref={nameRef} />
                </div>

                <div className="form-group">
                    <label htmlFor="age">Age</label>
                    <input type="number" className="form-control" id="age" value={age} onChange={ageHandler}
                        ref={ageRef} />
                </div>

                <div className="form-group">
                    <label htmlFor="college">College Name</label>
                    <input type="text" className="form-control" id="college" value={college} onChange={placeHandler} />
                </div>

                <button type="submit" className="button">Submit</button>
            </div>
        </form>
    )
}
