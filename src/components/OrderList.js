import React from 'react'
import Order from './Order'
import OrderSum from './OrderSum'
import { Button2 } from './Button2'
import '../css/OrderList.css'

function OrderList({CartItems, removeCartItem}) {

    const removeItem = (id) =>{
        // alert(id)
        removeCartItem(id)
    }

    return (
            <div className="order-list">
                <h3>Your Orders</h3>
                <div>
                    <table className="order-table">
                        <thead>
                            <tr>
                                <th>Food</th>
                                <th>price(P.Q.)</th>
                                <th>quantity</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            CartItems.map((item, index) =>{
                                return(
                                    <Order removeItem={removeItem} key={index} item={item}/>
                                )                               
                            }
                            )
                        }
                        </tbody>
                        <tfoot>
                            <tr>
                                <OrderSum CartItems={CartItems}/>
                            </tr>                          
                        </tfoot>
                    </table>

                    <div className="order-btn-div">
                        <Button2 disabled={CartItems.length <1 ? true : false } name="btn-primary" label="ORDER"/>
                    </div>

                </div>
            </div>
    )

    
}

export default OrderList
