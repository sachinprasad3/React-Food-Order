import React, {useState} from 'react'
import { Button2 } from './Button2'
// import '../css/Button.css'

function List2({food, addToCart}) {
    const[count, setCount] = useState(1)

    const add = (id, name, price) =>{
        // alert("clicked"+id+" "+name+" "+price+" "+ count)
        addToCart(
                    {id : id, 
                    name : name, 
                    price : price, 
                    quantity : count}
                )
    }

    const handleIncrement = ()=>{
        setCount(count + 1)
    }

    const handleDecrement = ()=>{
        setCount(count - 1)
    }

    return (       
        <li className="food-item">
            <div className="card">
                <div className="food-image">
                    <img src={require(`../images/${food.img}`).default}  alt="food" className="cards_item_img" width="180" height="120"/>
                </div>
                <div className="food-details">
                    <p>{food.name}</p>
                    <p>{food.price}</p>                         
                    Quantity = {count}{' '}
                    <Button2 name="increment-btn" onClick={handleIncrement} label="+"/>
                    <Button2 disabled = {count < 2 ? true : false} name="decrement-btn" onClick={handleDecrement} label="-"/>
                    <br />
                </div>
                <div className="add-food-btn">
                    <Button2 name="add-btn" onClick={()=>add(food.id, food.name, food.price)} label="Add"/>
                </div>

            </div>

        </li>       
    )
}

export default List2
