
import React, { useState } from 'react';
import './style.scss';
import InitialValue from './handleInputField'
import { CloseSvg } from '../../../../components/icons/styledsvg'


const Popup = ({ text, greeting, onSubmit, closePopup, handleChange, initialValue }) => {
    // const [initialValue, handleChange, reset] = InitialValue('')

    return (
        <div className='popup'>
            <form onSubmit={onSubmit}
            //  closePopup(initialValue) 
            >
                <div className='popup_inner'>
                    <CloseSvg onClick={closePopup} />
                    <div className='note-container'>
                        <h5>{text}</h5>
                        <p>{greeting}</p>
                    </div>
                    <input placeholder='Room title' name='title' className='text_input' onChange={handleChange} />
                    {/* <input placeholder='location' name='location' className='text_input' type='text' onChange={handleChange} /> */}
                    <input placeholder='price' name='price' className='text_input' type='text' onChange={handleChange} />
                    <textarea placeholder='description' name='description' className='text_input' type='text' onChange={handleChange} />
                    <button className='login_button'>LOG IN</button>
                    <div className='login-footer'>
                        <h5 className='new'>New to DroppX?</h5>
                        <h5 className='sign-up-text'>SIGN UP</h5>
                    </div>
                </div>
            </form>
        </div>
    );

}


export default Popup;