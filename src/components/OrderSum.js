import React from 'react'

function OrderSum({CartItems}) {
    return (
        <>
            <th>Total Price</th>
            <th>
                {
                    CartItems.reduce((sum, i) =>(
                        sum += i.quantity * i.price
                    ), 0)
                }
            </th>
        </>
    )
}

export default OrderSum
