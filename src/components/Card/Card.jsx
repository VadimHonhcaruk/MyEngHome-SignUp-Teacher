import React, { useEffect } from 'react';
import c from './Card.module.css';
import { Error } from '../Error';
import { cardInputChange } from '../../function/cardInput';
import m from '../MobileInput.module.css';
import {
    isValid,
} from 'creditcard.js';

export const Card = ({ card, setCard, errorCard, setCardError, isMobile, setError, clearErrors, register, errors }) => {

    const validateCardNumber = () => {
        if (card === '') {
            setCardError(false);
            return
        }

        if (!isValid(card.replace(/\D/g, '')) || (card.length !== 19 && card.length !== 0)) {
            setCardError(true);
        } else {
            setCardError(false);
        }
    }

    useEffect(() => {
        if (errorCard === false) {
            clearErrors('card');
        } else {
            setError('card', { type: 'custom', message: 'Неправильний номер карти' });
        }
    }, [errorCard, clearErrors, setError])

    return (!isMobile ? <>
        <div className={errorCard ? c.errorStyle : c.center}>
            <input id='card' onInput={cardInputChange}{...register("card", { onBlur: validateCardNumber, onChange: (e) => { setCard(e.target.value); } },)} value={card} type="text" name="card" maxLength="19" />
            <label htmlFor="card" id={card !== '' ? c.fill : undefined}>Банківська карта</label>
        </div>
        {errorCard || errors?.card?.message ? <p className={c.p}><Error />&nbsp;&nbsp;Неправильний номер карти</p> : <span className={c.crd}>Карта для переказу коштів за надані послуги</span>}
    </> : <>
        <div className={errorCard ? m.errorStyleMobile : m.inputBoxMobile}>
            <input id='card' onInput={cardInputChange}{...register("card", { onBlur: validateCardNumber, onChange: (e) => { setCard(e.target.value); } },)} value={card} type="text" name="card" maxLength="19" />
            <label htmlFor="card" className={m.fin} id={card !== '' ? m.fillMobile : undefined}>Банківська карта</label>
        </div>
        {errorCard || errors?.card ? <p className={c.p}><Error />&nbsp;&nbsp;Неправильний номер карти</p> : <p className={c.crd}>Карта для переказу коштів за надані послуги</p>}
    </>
    )
}