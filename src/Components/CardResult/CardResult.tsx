import React from 'react';
import './cardResult.css';
// import ReactDOM from 'react-dom';

export function CardResult () {
    return (
        <div className='cardContainer'>
            <div className='paymentLogo'></div>
            <p className='fieldValue'>7777 2222 3333 4444</p>
            <div className='cardBottom'>
                <div className='cardName'>
                    <span className='fieldLabel'>NAME</span>
                    <span className='fieldValue'>ANDREY IVANOV</span>
                </div>
                <div className='cardDate'>
                    <span className='fieldLabel'>VALID TILL</span>
                    <span className='fieldValue'>11/25</span>
                </div>
            </div>
        </div>
    )
}