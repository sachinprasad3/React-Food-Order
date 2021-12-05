import React, {useState} from 'react'
import Button from './Button'

function Quantity() {
    const initialCount = 1
    const [count, setCount] = useState(initialCount)
    
    const quantity = (count) =>{
        setCount(count)
    }
    return (
        <>
            <Button btnName="+"/>
        </>
    )
}

export default Quantity
