import React from 'react'
import Mayour from '../mayoroflagos.jpeg'
import Icon, { FontAwesome, Feather } from 'react-web-vector-icons';

const index = () => {
    return (
        <div>
            <div className='image-holder'>
                <img src={Mayour} />
                <div className='name-holder'>
                    <p>Alember holdings</p>
                </div>
            </div>
            <div className='menu-item'>
                <p>Dashboard</p>
                <p>rooms</p>
                <p>history</p>
                <p>Informations</p>
                <p>Settings</p>
            </div>

        </div>
    )
}
export default index