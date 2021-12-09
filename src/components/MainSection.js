import React, {useState} from 'react'
import FoodList from './FoodList'
import OrderList from './OrderList'

function MainSection() {
    const[cartItems, setCartItems] = useState([])

    const handleCart = (item) =>{
        // const newCart = [...cartItems, item]
        // setCartItems(newCart)
        // console.log(newCart)

        const theItem = cartItems.find(food => food.id === item.id);
        if(theItem){
            const newCart = cartItems.map(i => i.id === item.id ?
                                        { ...i, quantity:i.quantity + item.quantity }
                                        : i)          
            setCartItems(newCart)
        }
        else{
            const newCart = [...cartItems, item]
            setCartItems(newCart)
        }

        console.log(cartItems)

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
