import React, { useCallback, useState } from 'react'
import Card from '../../../../components/card'
import './style.scss'
import ReactTable from '../../../../components/table/Table'
import Topbar from '../../../../components/top-bar'
import Searchbar from '../../../../components/search-bar/search'
import Dropdownselect from '../../../../components/Dropdownselect'
import Select from 'react-select'


const Countries = [
    { label: "Albania", value: 355 },
    { label: "Argentina", value: 54 },
    { label: "Austria", value: 43 },
    { label: "Cocos Islands", value: 61 },
    { label: "Kuwait", value: 965 },
    { label: "Sweden", value: 46 },
    { label: "Venezuela", value: 58 }
];




class index extends React.Component {
    
    handleDropdown() {
        console.log('Changing')
    }

    selectTable() {
        console.log('+======> this is table has been selected')
    }

    render() {

        return (
            <div className='dashboard'>
                <Topbar title={'History'} />
           
          
           
                <div className='table-holder'>
                    <div className='toolkit-holder'>
                        <Searchbar placeholder={'Search users'} />
                        <div className='dropdown-holder'>
                            <p>Filter by: </p>
                            <div className="container">
                                <div className="row">
                                    {/* <div className="col-md-3"></div> */}
                                    <div className="col-md-6">
                                        <Select options={Countries} onChange={this.handleDropdown} />
                                    </div>
                                    {/* <div className="col-md-4"></div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <ReactTable onClick={this.selectTable}/>
                </div>
            
            </div>
        )
    }
}
export default index;