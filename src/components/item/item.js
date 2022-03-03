import React, { useState, useEffect } from 'react'
import Checkbox from '@mui/material/Checkbox';
import "./style.css"

function ItemComp(props) {

    const [isHover, setHover] = useState(false);
    const [checked, setChecked] = useState(false);

    const handleChange = (event, id) => {
        if (props.setdisableAll) {
            console.log("there are 2 checked")
            setChecked(false);
        }
        else {
            setChecked(event.target.checked);
        }
    };




    return (
        <div className='item' onMouseOver={() => { setHover(true) }} onMouseLeave={() => { setHover(false) }}>

            <Checkbox checked={checked}
                onChange={(e) => {
                    setHover(true)
                    props.isCheckBox(e.target.checked)
                    handleChange(e, props.ID)
                }} />
            <div >{props.name} </div>
            {isHover && (
                <button className='btn' onClick={() => {
                    setHover(true)
                    props.callbackEdit(true)
                }}>Edit</button>
            )}
        </div>
    )
}

export default ItemComp