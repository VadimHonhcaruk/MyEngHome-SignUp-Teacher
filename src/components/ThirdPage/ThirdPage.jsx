import React from 'react';
import { Phone } from '../Number/Phone';
import { Card } from '../Card/Card';
import c from "./ThirdPage.module.css";

export const ThirdPage = ({ card, setCard, setCardError, errorCard, isMobile, phone, setPhone, clearErrors, setError, register, errors }) => {
    return (
        <div className={c.cont}>
            <h3 className={c.h3}>Надайте персональні дані</h3>
            <Phone isMobile={isMobile} phone={phone} setPhone={setPhone} clearErrors={clearErrors} register={register} errors={errors} />
            <Card card={card} errorCard={errorCard} setCard={setCard} setCardError={setCardError} isMobile={isMobile} clearErrors={clearErrors} setError={setError} register={register} errors={errors} />
        </div>
    )
}