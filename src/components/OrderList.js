import React from 'react'
import Order from './Order'
import '../css/OrderList.css'

function OrderList({CartItems, removeCartItem}) {

    const removeItem = (id) =>{
        // alert(id)
        removeCartItem(id)
    }
    return (
            <div className="order-list">
                <h5>Your Orders</h5>
                {
                    CartItems.map((item, index) =>{
                        return(
                            <Order removeItem={removeItem} key={index} item={item}/>
                        )
                        
                    }

                    )
                }
            </div>
    )

    
}

export default OrderList
