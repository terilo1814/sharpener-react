import './ShoppingList.css'

export const ShoppingList = ({ dataList, setDataList, countHandler, setTotalAmount,setCartList}) => {

    const sizeHandler = (id, size,) => {
        setDataList((prevData) => {
            const newData = [...prevData]
            newData.map((item) => {
                if (item.id === id && item.size[size]) {
                    item.size[size]--
                    countHandler()
                    setTotalAmount((prevData) => {
                        return (Number)(prevData) + (Number)(item.price)
                    })
                    setCartList((prevData)=>{
                        const temp=[...prevData]
                        temp.map((data) =>{
                            if(data.shirt===item.shirt)
                            {
                                data.size[size]++
                            }
                        })
                        return temp
                    })
                }
            })
            return newData
        })
    }

    return (
        <ul className="items">
            {dataList.map((item) => (

                <li key='id'>{item.shirt} {item.desc} {item.price}
                    <button onClick={() => sizeHandler(item.id, 'large')}>Buy Large ({item.size.large})</button>
                    <button onClick={() => sizeHandler(item.id, 'medium')}>Buy Medium ({item.size.medium})</button>
                    <button onClick={() => sizeHandler(item.id, 'small')}>Buy Small({item.size.small})</button>
                </li>

            ))}
        </ul>
    )
}
