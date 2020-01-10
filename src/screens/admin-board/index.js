import React from 'react'
import LeftSide from './left-side'
import RightSide from './right-side'
import './style.scss'
export default function index() {
    return (
        <div className='admin-board'>
            <div className='left-side'>
                <LeftSide />
            </div>
            <div className='right-side'>
                <RightSide />
            </div>
        </div>
    )
}
