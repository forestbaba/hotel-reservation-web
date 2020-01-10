import React from 'react'

const  Card =({title, value})=> {
    return (
        <div className='card'>
        <div className='details-holder'>  
        <p className='title'>{title}</p>
            <p className='value'>{value}</p>
        </div>
          
        </div>
    )
}
export default Card; 