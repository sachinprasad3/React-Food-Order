import React from 'react'
import {RiDeleteBin5Fill} from 'react-icons/ri'

function Order({item, removeItem}) {

    return (
        <tr>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.quantity} </td>
            <td><RiDeleteBin5Fill onClick={()=>removeItem(item.id)} className="delete-icon"/></td>
        </tr>
    )
}

export default Order
