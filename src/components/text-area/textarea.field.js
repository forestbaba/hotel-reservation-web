import React from 'react'
import './style.scss'

const InputField = ({ labeltitle, placeholder, type }) => {
    return (
        <div className='email-holder'>
            <p>{labeltitle}</p>
            <textarea placeholder={placeholder} type={type}/>
        </div>
    )
}
export default InputField