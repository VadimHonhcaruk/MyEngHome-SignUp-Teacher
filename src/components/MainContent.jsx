import React, { useState } from 'react';
import c from './MainContent.module.css';
import { useForm } from 'react-hook-form';
import { FirstPage } from './FirstPage/FirstPage';
import { ImageRight } from './ImageRight/ImageRight';

const now = new Date();

export const MainContent = () => {

    const [ageUnderEi, setAgeUnderEi] = useState(false);
    const [isValideDate, setIsValideDate] = useState(true);

    const {
        register,
        setError,
        clearErrors,
        formState: {
            errors,
            isValid
        },
        handleSubmit,
        watch,

    } = useForm({ mode: 'onBlur' });

    return (
        <div className={c.main}>
            <div className={c.flex}>
                <FirstPage isValideDate={isValideDate} now={now} clearErrors={clearErrors} watch={watch} setError={setError} register={register} errors={errors} />
                <ImageRight />
            </div>
            <div className={c.buttCont}>
                <button className={c.btnGrad}>Далі</button>
            </div>
        </div>
    )
}
