import React from 'react';
import './cardResult.css';
import creditCardType from 'credit-card-type';
import { useSelector } from 'react-redux';
import { EIcon, Icon } from '../../Icons/Icon.tsx';
import { RootState } from '../../Store/store.ts';

const paymentSystemLogo = (cardNumber) => {        
    if (creditCardType(cardNumber).length) {        
        switch (creditCardType(cardNumber)[0].type) {
            case 'visa':
                return <Icon name={EIcon.visa}/>
            case 'mastercard':
                return <Icon name={EIcon.mastercard}/>
            case 'mir':
                return <Icon name={EIcon.mir}/>
            case 'maestro':
                return <Icon name={EIcon.maestro}/>
            case 'american-express':
                return <Icon name={EIcon.americanExpress}/>
            case 'diners-club':
                return <Icon name={EIcon.dinnersClub}/>
            default:
                return
            }
    } 
}

export function CardResult () {
    const form = useSelector((state: RootState) => state.card.card);    

    return (
        <div className='cardContainer'>
            <div className={`paymentLogo ${!creditCardType(form.cardNumber).length ? 'paymentLogo--default' : ''}`}> 
                {paymentSystemLogo(form.cardNumber)}
            </div>
            <p className='fieldValue'>{form.cardNumber}</p>
            <div className='cardBottom'>
                <div className='cardName'>
                    <span className='fieldLabel'>NAME</span>
                    <span className='fieldValue'>{form.cardHolder.toUpperCase()}</span>
                </div>
                <div className='cardDate'>
                    <span className='fieldLabel'>VALID TILL</span>
                    <span className='fieldValue'>{form.cardDate}</span>
                </div>
            </div>
        </div>
    )
}