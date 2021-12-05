import React,{useMemo} from 'react'
// import List from './List'
import '../css/FoodList.css'
import { DATAS } from './Data'
import List2 from './List2'

function FoodList({handleCart}) {

    const foods = useMemo(()=> DATAS, [])

    const addToCart = (item)  =>{
        handleCart(item)
    }
    
    return (
        <div className="food-list">
            <ul>
                {/* <List /> */}
                {foods.map((food, index)=>{
                    return <List2 key={index} food={food} addToCart={addToCart}/>
                })}
            </ul>            
        </div>
    )
}

export default FoodList
