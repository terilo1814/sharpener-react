import './CourseGoalItem.css'



export const CourseGoalItem = props => {

  const deleteHandler = () => {
    props.onDelete(props.id)
  }

  return (
    <li className='goal-item' onClick={deleteHandler}>
      {props.children}
      {/* {props.text} */}
    </li>
  )
}
