import React, {useState} from 'react'
import FoodList from './FoodList'
import OrderList from './OrderList'

function MainSection() {
    const[cartItems, setCartItems] = useState([])

    const handleCart = (item) =>{
        const newCart = [...cartItems, item]
        setCartItems(newCart)
        console.log(newCart)
    }

    const removeCartItem = (id) =>{
        // alert(id)
        const removeArr = [...cartItems].filter(item =>item.id !== id)
        setCartItems(removeArr)
    }
    return (
        <div className="main-section">
            <FoodList handleCart={handleCart}/>
            <OrderList CartItems={cartItems} removeCartItem={removeCartItem}/>
        </div>
    )
}

export default MainSection
