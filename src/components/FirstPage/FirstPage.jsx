import React from 'react';
import { NameInput } from '../Name/NameInput';
import c from "./FirstPage.module.css";
import { Birth } from '../Birthday/Birth';
import { Phone } from '../Number/Phone';
import { Card } from '../Card/Card';

export const FirstPage = ({ card, errorCard, setCard, setCardError, isMobile, day, setDay, month, setMonth, year, setYear, firstName, setFirstName, setSecondName, secondName, phone, setPhone, ageUnderEi, clearErrors, watch, setError, register, errors, now, isValideDate }) => {
    return (
        !isMobile ? <div className={c.cont}>
            <h2 className={c.h2}>Реєстрація викладача</h2>
            <h3 className={c.h3}>Надайте персональні дані</h3>
            <NameInput firstName={firstName} setFirstName={setFirstName} setSecondName={setSecondName} secondName={secondName} clearErrors={clearErrors} watch={watch} setError={setError} register={register} errors={errors} />
            <Birth day={day} setDay={setDay} month={month} setMonth={setMonth} year={year} setYear={setYear} ageUnderEi={ageUnderEi} isValideDate={isValideDate} register={register} errors={errors} now={now} />
            <Phone phone={phone} setPhone={setPhone} clearErrors={clearErrors} register={register} errors={errors} />
            <Card card={card} errorCard={errorCard} setCard={setCard} setCardError={setCardError} clearErrors={clearErrors} setError={setError} register={register} errors={errors} />
        </div> :
            <div className={c.cont}>
                <h3 className={c.h3}>Надайте персональні дані</h3>
                <NameInput isMobile={isMobile} firstName={firstName} setFirstName={setFirstName} setSecondName={setSecondName} secondName={secondName} clearErrors={clearErrors} watch={watch} setError={setError} register={register} errors={errors} />
                <Birth isMobile={isMobile} day={day} setDay={setDay} month={month} setMonth={setMonth} year={year} setYear={setYear} ageUnderEi={ageUnderEi} isValideDate={isValideDate} register={register} errors={errors} now={now} />
            </div>
    )
}
