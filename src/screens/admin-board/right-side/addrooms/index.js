import React, { Component } from 'react'
import './style.scss'
import TextInput from '../../../../components/text-input/textinput.field'
import TextArea from '../../../../components/text-area/textarea.field'
export default class index extends Component {
    render() {
        return (
            <div className='addrooms'>
                <TextInput labeltitle={'Room Name'} placeholder={'the brons'} type={'text'} />
                <TextInput labeltitle={'Price'} placeholder={'300'} type={'text'} />
                <TextInput labeltitle={'Location'} placeholder={'the brons'} type={'text'} />
                <TextInput labeltitle={'Location'} placeholder={'the brons'} type={'text'} />
                <TextArea labeltitle={'Description'} placeholder={'description'} type={'text'} />
                
            </div>
        )
    }
}
