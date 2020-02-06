import React, { Component } from 'react'
import { AddSvg } from '../icons/styledsvg'
import './style.scss'

 const Addbutton = ({handleClick}) => {
        return (
            <div className='add' onClick={handleClick}>
                <AddSvg/>
                <button>Add New</button>
                
            </div>
        )
    
}
export default Addbutton;
