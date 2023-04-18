import React, { useEffect, useState } from 'react';
import c from './Card.module.css';
import { Error } from '../Error';
import { cardInputChange } from '../../function/cardInput';
import {
    isValid,
} from 'creditcard.js';

export const Card = ({ setError, clearErrors, register, errors }) => {

    const [card, setCard] = useState('');
    const [errorCard, setCardError] = useState(false);
    const validateCardNumber = () => {
        if (card === '') {
            setCardError(false);
            return
        }

        if (!isValid(card.replace(/\D/g, ''))) {
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

    return (<>
        <div className={errorCard ? c.errorStyle : c.center}>
            <input id='card' onInput={cardInputChange}{...register("card", { onBlur: () => { validateCardNumber(card, setError, clearErrors, errors) }, onChange: (e) => { setCard(e.target.value); } },)} value={card} type="text" name="card" maxLength="19" />
            <label htmlFor="card" id={card !== '' && c.fill}>Банківська карта</label>
        </div>
        {errorCard ? <p className={c.p}><Error />&nbsp;&nbsp;Неправильний номер карти</p> : <span className={c.crd}>Карта для переказу коштів за надані послуги</span>}
    </>
    )
}