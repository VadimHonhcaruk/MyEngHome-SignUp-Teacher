import React, { useState } from 'react';
import c from './MainContent.module.css';
import { useForm } from 'react-hook-form';
import { FirstPage } from './FirstPage/FirstPage';
import { ImageRight } from './ImageRight/ImageRight';
import { useBirthdate } from '../hooks/useBirthdate';
import { teacherChecker, teacherPhoneCheck } from '../function/teacherChecker';

const now = new Date();

export const MainContent = () => {

    const [ageUnderEi, setAgeUnderEi] = useState(false);
    const [isValideDate, setIsValideDate] = useState(true);
    const [phone, setPhone] = useState('');

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

    const TOKEN = process.env.REACT_APP_TOKEN;
    const AUTH = process.env.REACT_APP_AUTH;
    const PATH = process.env.REACT_APP_API_PATH;
    const PATH_HANDLER = process.env.REACT_APP_API_PATH_HANDLER;

    useBirthdate(watch, now, setIsValideDate, setAgeUnderEi);
    //errors?.firstName || errors?.secondName || errors?.day || errors?.month || errors?.year || errors?.phone || !isValideDate || errors?.card
    const validCont = async () => {
        if (errors?.firstName || errors?.secondName || errors?.day || errors?.month || errors?.year || errors?.phone || !isValideDate || errors?.card || !isValideDate || watch('firstName') === '' || watch('secondName') === '' || watch('day') === '' || watch('month') === '' || watch('year') === '' || watch('phone') === '' || !isValideDate || errors?.card) {
            return;
        } else {
            const response = await teacherPhoneCheck(phone.replace(/[^+\d]/g, ''), PATH, TOKEN, AUTH);
            if (response === true) {
                console.log("YES!")
            } else if (response === false) {
                setError('phone', { type: 'custom', message: 'Даний номер телефону вже зареєстровано' })
            } else {
                console.log("error");
            }
        }
    }

    return (
        <div className={c.main}>
            <div className={c.flex}>
                <FirstPage phone={phone} setPhone={setPhone} ageUnderEi={ageUnderEi} isValideDate={isValideDate} now={now} clearErrors={clearErrors} watch={watch} setError={setError} register={register} errors={errors} />
                <ImageRight />
            </div>
            <div className={c.buttCont}>
                <button className={c.btnGrad} onClick={validCont}>Далі</button>
            </div>
        </div>
    )
}
