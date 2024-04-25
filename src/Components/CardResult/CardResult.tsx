import React from 'react';
import './cardResult.css';
import creditCardType from 'credit-card-type';
import { useSelector } from 'react-redux';
import { EIcon, Icon } from '../../Icons/Icon.tsx';
import { RootState } from '../../Store/store.ts';


export function CardResult () {
    const form = useSelector((state: RootState) => state.card.card);    

    const getPymentSystemLogo = (cardNumber) => {
        if (creditCardType(cardNumber)[0]) {
            return creditCardType(cardNumber)[0].type;
        }
    }
    return (
        <div className='cardContainer'>
            <div className='paymentLogo'> 
                {getPymentSystemLogo(form.cardNumber) === 'visa' &&
                    <Icon name={EIcon.visa}/>
                }
                {getPymentSystemLogo(form.cardNumber) === 'mastercard' &&
                    <Icon name={EIcon.mastercard}/>
                }
                {getPymentSystemLogo(form.cardNumber) === 'mir' &&
                    <Icon name={EIcon.mir}/>
                }
                {getPymentSystemLogo(form.cardNumber) === 'maestro' &&
                    <Icon name={EIcon.maestro}/>
                }
                {getPymentSystemLogo(form.cardNumber) === 'american-express' &&
                    <Icon name={EIcon.americanExpress}/>
                }
                {getPymentSystemLogo(form.cardNumber) === 'diners-club' &&
                    <Icon name={EIcon.dinnersClub}/>
                }
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