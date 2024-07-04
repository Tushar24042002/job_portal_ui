import React from 'react'
import { CONSTANTS } from '../../Consts'

const Button = ({type = CONSTANTS.BUTTON.PRIMARY, value = "submit", onClick=null}) => {

    return (
        <div className={`btn ${type}`} onClick={onClick}>{value}</div>
    )
}

export default Button