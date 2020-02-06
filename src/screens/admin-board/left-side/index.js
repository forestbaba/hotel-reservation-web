import React from 'react'
import Mayour from '../mayoroflagos.jpeg'
import Icon, { FontAwesome, Feather } from 'react-web-vector-icons';
import { ReactComponent as Dashicon } from '../../../components/icons/dashboard.svg'
import { ReactComponent as Bed } from '../../../components/icons/bed.svg'
import styled from 'styled-components'

import styledundefined, { keyframes } from 'styled-components'
import './style.scss'
import { StyledSVG, GearSvg, HistorySvg, QuestionSvg, DownSvg, CustomerSvg } from '../../../components/icons/styledsvg'
import { Link, BrowserRouter } from 'react-router-dom';



//npm add @babel/runtime



const rotate = keyframes`
    from {
    transform: rotate(0deg);
    }
    to {
    transform: rotate(360deg);
    }
    `;

const fade = keyframes`
0% {
fill:#61DAFB;
}
50% {
 fill:#999;
}
100%{
 fill:#61DAFB;
}
`;


const pulse = keyframes`
0% {
 transform: scale(0);
 opacity: 1;
 transform-origin: center;
}
100% {
 transform: scale(4.5);
 opacity: 0;
 transform-origin: center;
}
`;


const StyledLogo = styled(Dashicon)`
// animation: ${rotate} infinite 20s linear;
 height: 1rem;
 width: 1rem;
 display: block;
 .lines{
 animation: ${fade} infinite 8s linear;
 }
 margin-left:20px;
 margin-right:20px;

//  margin: auto;
`
const StyledBed = styled(Bed)`
// animation: ${rotate} infinite 20s linear;
 height: 1rem;
 width: 1rem;
 display: block;
 .lines{
 animation: ${fade} infinite 8s linear;
 }
 margin-left:20px;
 margin-right:20px;

//  margin: auto;
`

const index = () => {
    return (
        <div className='left-side'>
            <div className='image-holder'>
                <img src={Mayour} />
                <div className='name-holder'>
                    <h4>Alember holdings</h4>
                    <DownSvg/>
                </div>
            </div>
            <div className='menu-item'>
                <ul>

                    <li>
                        <div className='list-div'>
                            <StyledLogo />
                            <Link to="/">Dashboard</Link> 
                          </div>
                    </li>
                    <li>
                        <div className='list-div'>
                                <StyledBed />
                                <Link to="/rooms">Rooms</Link> 
                            
                          </div>
                    </li>
                    <li>
                        <div className='list-div'>
                                <CustomerSvg />
                                <Link to="/customers">Customers</Link> 
                            
                          </div>
                    </li>
                    <li>
                        <div className='list-div'>
                            <HistorySvg />
                            <Link to="/history">History</Link> 

                            
                          </div>
                    </li>
                    <li>
                        <div className='list-div'>
                            <QuestionSvg />
                            <Link to="/information">Informations</Link> 
                            
                          </div>
                    </li>
                    <li>
                        <div className='list-div'>
                            <GearSvg />
                            Settings
                          </div>
                    </li>

                </ul>
              
            </div>

        </div>
    )
}
export default index