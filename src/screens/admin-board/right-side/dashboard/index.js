import React from 'react'
import Card from '../../../../components/card'
import './style.scss'
import ReactTable from '../../../../components/table/Table'
import Topbar from '../../../../components/top-bar'


const index = () => {
    let x =['one', 'two','three']
    return (
        <div className='dashboard'>
            <Topbar title={'Dashboard'}/>
           
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