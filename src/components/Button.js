import React, {useState} from 'react'
import '../css/Button.css'

function Button({quantity}) {
    const initialCount = 1
    const [count, setCount] = useState(initialCount)

    if(count){
        quantity(count)
    }
    return (
        <>
            Quantity = {count}
            <button className="increment" onClick={()=> setCount( count + 1)}>+</button>
            <button className="decrement" onClick={()=> setCount( count - 1)}>-</button>   
        </>
    )
}

export default Button
