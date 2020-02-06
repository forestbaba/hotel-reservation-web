import React from 'react'
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


const FilterComponent = ({handleDropdown}) => {
    return (
       <div className='dropdown-holder'>
        <p>Filter by: </p>
        <div className="container">
            <div className="row">
                {/* <div className="col-md-3"></div> */}
                <div className="col-md-6">
                        <Select options={Countries} onChange={handleDropdown} />
                </div>
                {/* <div className="col-md-4"></div> */}
            </div>
        </div>
    </div>  
    )
   
}
export default FilterComponent;