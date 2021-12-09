import React from 'react'
import '../css/Button.css'

export function Button2(props) {  
    return <button className={props.name} onClick={props.onClick} disabled={props.disabled}>{props.label}</button>
}
