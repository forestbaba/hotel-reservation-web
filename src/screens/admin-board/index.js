import React from 'react'
import LeftSide from './left-side'
import RightSide from './right-side'
import './style.scss'
import { Link, BrowserRouter } from 'react-router-dom';

export default function index() {
    return (
        <div className='admin-board'>
            <BrowserRouter>

                <div className='left-side'>
                    <LeftSide />

                </div>
                <div className='right-side'>
                    <RightSide />
                </div>
            </BrowserRouter>

        </div>
    )
}
