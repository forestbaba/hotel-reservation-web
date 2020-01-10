import React from 'react'
import Card from './card'
import './style.scss'
import ReactTable from './table/Table'


const index = () => {
    let x =['one', 'two','three']
    return (
        <div className='dashboard'>
            <div className='top-bar'>
                <h5>Dashboard</h5>
            </div>
           
            <div className='cards-holder'>
            {
                x.map((index) =>(
                <Card  title={'Income'} value={'$20,000'}/>

                ))
                
            }
              

            </div>
             <div className='dashboard-desc'>
                 <p>THis is the detail description of this table</p>
            </div>
            <div>
                <ReactTable/>
            </div>
        </div>
    )
}
export default index;