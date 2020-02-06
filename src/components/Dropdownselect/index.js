import React, { Component } from 'react'
import Select from 'react-select';
import './style.scss'
import 'bootstrap/dist/css/bootstrap.min.css';


class index extends React.Component {

    customStyles = {
        
        control: (provided, state) => ({
            ...provided,
            height: 43,
            width: '50%',
            minHeight: 23,
            backgroundColor: 'none',
            borderWidth: 0,
            

        }),
     
    }

    constructor(props) {
        super(props)
        this.state = {
        }

    }
    handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    };

    render() {

        const { selectedOption } = this.state;

        return (
            <div className="drop-down-container" >
                {this.props.isIcon ?<img src={this.props.flagicon} /> : null}
                <div className="drop-down-select-holder" style={{ width: this.props.width, margin: '1.5rem 0', borderWidth: 0 }}>

                    <div style={{width:'250px'}} >
                        <Select
                            styles={this.customStyles}
                            value={selectedOption}
                            onChange={this.handleChange}
                            options={this.props.selectoption} />
                    </div>
                </div>
            </div>
        )
    }
}



export default index