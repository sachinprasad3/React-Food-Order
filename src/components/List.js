import React,{useState,useMemo} from 'react'
import { DATAS } from './Data'
// import Button from './Button'
import { Button2 } from './Button2'

function List() {
    const foods = useMemo(()=> DATAS, [])
   
    // const[quantity, setQuantity] = useState(0)
    const[count, setCount] = useState(1)

    const add = (id, name, price) =>{
        alert("clicked"+id+" "+name+" "+price+" "+ count)
    }
    
    // const itemQuantity = (count) =>{
    //     console.log("item count = "+count)
    //     setCount(count)
    // }

    // const initialCount = 1
    // const [count, setCount] = useState(initialCount)

    const handleIncrement = ()=>{
        setCount(count + 1)
    }
    const handleDecrement = ()=>{
        setCount(count - 1)
    }

    return (
       foods.map((food)=>{
           
            return (
                    <li key={food.id}>
                        <div className="card">
                            <p>{food.name}</p>
                            <p>{food.price}</p>
                            {/* <Button quantity={itemQuantity}/> */}

                            {/* Quantity = {count}
                            <button className="increment" onClick={()=> setCount( count + 1)}>+</button>
                            <button className="decrement" onClick={()=> setCount( count - 1)}>-</button> */}
                            
                            Quantity = {count}
                            <Button2 onClick={handleIncrement} label="+"/>
                            <Button2 onClick={handleDecrement} label="-"/>
                            <br />
                            <Button2 onClick={()=>add(food.id, food.name, food.price)} label="Add"/>
                            {/* <button onClick={()=> add(food.id, food.name, food.price)}>Add</button> */}
                        </div>
                    </li>
            )
       })
    )
}

export default List
