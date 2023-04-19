import React, { useState } from 'react';
import c from './MainContent.module.css';
import { useForm } from 'react-hook-form';
import { FirstPage } from './FirstPage/FirstPage';
import { SecondPage } from './SecondPage/SecondPage';
import { ImageRight } from './ImageRight/ImageRight';
import { useBirthdate } from '../hooks/useBirthdate';
import { teacherPhoneCheck } from '../function/teacherChecker';

const now = new Date();

export const MainContent = ({ setIsModalVisible, setIsSuccess }) => {

    const [ageUnderEi, setAgeUnderEi] = useState(false);
    const [isValideDate, setIsValideDate] = useState(true);
    const [phone, setPhone] = useState('');
    const [page, setPage] = useState(1);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [checkerOne, setCheckerOne] = useState(false);
    const [checkerTwo, setCheckerTwo] = useState(false);
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [card, setCard] = useState('');

    const {
        register,
        setError,
        clearErrors,
        formState: {
            errors,
        },
        handleSubmit,
        watch,

    } = useForm({ mode: 'onBlur' });

    const TOKEN = process.env.REACT_APP_TOKEN;
    const AUTH = process.env.REACT_APP_AUTH;
    const PATH = process.env.REACT_APP_API_PATH;
    const PATH_HANDLER = process.env.REACT_APP_API_PATH_HANDLER;

    useBirthdate(watch, now, setIsValideDate, setAgeUnderEi);

    const validCont = async () => {
        if (errors?.firstName || errors?.secondName || errors?.day || errors?.month || errors?.year || errors?.phone || !isValideDate || errors?.card || !isValideDate || watch('firstName') === '' || watch('secondName') === '' || watch('day') === '' || watch('month') === '' || watch('year') === '' || watch('phone') === '' || !isValideDate || errors?.card) {
            return;
        } else {
            const response = await teacherPhoneCheck(phone.replace(/[^+\d]/g, ''), PATH, TOKEN, AUTH);
            if (response === true) {
                setPage(2);
            } else if (response === false) {
                setError('phone', { type: 'custom', message: 'Даний номер телефону вже зареєстровано' })
            } else if (response === undefined) {
                setIsModalVisible(true);
                setIsSuccess(false);
                setTimeout(() => {
                    setIsModalVisible(false);
                }, 5000);
            }
        }
    }

    return (
        <div className={c.main}>
            <div className={c.flex}>
                {page === 1 ? <FirstPage phone={phone} setPhone={setPhone} ageUnderEi={ageUnderEi} isValideDate={isValideDate} now={now} clearErrors={clearErrors} watch={watch} setError={setError} register={register} errors={errors} day={day} setDay={setDay} month={month} setMonth={setMonth} year={year} setYear={setYear} firstName={firstName} setFirstName={setFirstName} setSecondName={setSecondName} secondName={secondName} card={card} setCard={setCard} /> : <SecondPage passwordCheck={passwordCheck} setPasswordCheck={setPasswordCheck} password={password} setPassword={setPassword} email={email} setEmail={setEmail} register={register} errors={errors} setError={setError} clearErrors={clearErrors} setCheckerOne={setCheckerOne} setCheckerTwo={setCheckerTwo} />}
                <ImageRight page={page} />
            </div>
            {page === 1 ? <div className={c.buttCont}>
                <button className={c.btnGrad} onClick={validCont}>Далі</button>
            </div> : <div className={c.buttContReg}>
                <div className={c.buttBack} onClick={() => setPage(1)}>Назад</div>
                <button className={c.btnGrad + ' ' + c.btnGradReg}>Зареєструватись</button>
                <div></div>
            </div>}
        </div>
    )
}
