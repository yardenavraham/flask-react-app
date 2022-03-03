import { TextField } from '@mui/material'
import React from 'react'
import './style.css'

function FormComp(props) {
    return (
        <div className='form'>
            Address  <TextField value ={props.address} ></TextField>
            Phone <TextField value ={props.phone}></TextField>
            Email <TextField value ={props.email}></TextField>
            Marital<TextField value ={props.maritalStatus}></TextField>
            Gender <TextField value ={props.gender}></TextField>
        </div>
    )
}

export default FormComp