import './Userlist.css'

export const UserList = (props) => {
    return (

        <ul>
            {props.dataList.map((data) => (
                <li key={data.id}>
                    {data.name}{' '}
                    {data.age}{' '}
                    {data.college}
                </li>
            ))}
        </ul>

    )
}
