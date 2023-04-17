import React from 'react';
import { NameInput } from '../Name/NameInput';
import c from "./FirstPage.module.css";
import { Birth } from '../Birthday/Birth';
import { Phone } from '../Number/Phone';
import { Card } from '../Card/Card';

export const FirstPage = ({ ageUnderEi, clearErrors, watch, setError, register, errors, now, isValideDate }) => {
    return (
        <div className={c.cont}>
            <h2>Реєстрація викладача</h2>
            <h3>Надайте персональні дані</h3>
            <NameInput clearErrors={clearErrors} watch={watch} setError={setError} register={register} errors={errors} />
            <Birth ageUnderEi={ageUnderEi} isValideDate={isValideDate} register={register} errors={errors} now={now} />
            <Phone clearErrors={clearErrors} register={register} errors={errors} />
            <Card register={register} />
        </div>
    )
}
