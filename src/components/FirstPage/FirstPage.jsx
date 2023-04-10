import React from 'react';
import { NameInput } from '../Name/NameInput';
import c from "./FirstPage.module.css";
import { Birth } from '../Birthday/Birth';

export const FirstPage = ({ clearErrors, watch, setError, register, errors, now, isValidDate }) => {
    return (
        <div className={c.cont}>
            <h2>Реєстрація викладача</h2>
            <h3>Надайте персональні дані</h3>
            <NameInput clearErrors={clearErrors} watch={watch} setError={setError} register={register} errors={errors} />
            <Birth isValideDate={isValidDate} register={register} errors={errors} now={now} />
        </div>
    )
}
