import React from 'react'
import {RiDeleteBin5Fill} from 'react-icons/ri'


function Order({item, removeItem}) {
    return (
        <p>
            <span>{item.name} {' '}</span>
            <span>{item.price} {' '}</span>
            <span>{item.quantity} </span>
            <span><RiDeleteBin5Fill onClick={()=>removeItem(item.id)} className="delete-icon"/></span>
        </p>
    )
}

export default Order
