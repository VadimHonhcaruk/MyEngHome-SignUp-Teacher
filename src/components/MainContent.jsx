import React, { useState } from 'react';
import c from './MainContent.module.css';
import { useForm } from 'react-hook-form';
import { FirstPage } from './FirstPage/FirstPage';
import { SecondPage } from './SecondPage/SecondPage';
import { ImageRight } from './ImageRight/ImageRight';
import { useBirthdate } from '../hooks/useBirthdate';
import { teacherPOST, teacherEmailCheck, teacherPhoneCheck } from '../function/teacherChecker';
import { Modal } from './Modal/Modal';
import { transformString } from '../function/transformString';
import { ThirdPage } from './ThirdPage/ThirdPage';
import { CheckboxInputs } from './Checkbox/Checkbox';

const now = new Date();

export const MainContent = ({ isMobile }) => {

    const [ageUnderEi, setAgeUnderEi] = useState(false);
    const [isValideDate, setIsValideDate] = useState(true);
    const [phone, setPhone] = useState('');
    const [page, setPage] = useState(1);
    const [pageMobile, setPageMobile] = useState(1);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [card, setCard] = useState('');
    const [errorCard, setCardError] = useState(false);
    const [canClick, setCanClick] = useState(true);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const {
        register,
        setError,
        clearErrors,
        formState: {
            errors,
        },
        watch,

    } = useForm({ mode: 'onBlur' });

    const TOKEN = process.env.REACT_APP_TOKEN;
    const AUTH = process.env.REACT_APP_AUTH;
    const PATH = process.env.REACT_APP_API_PATH;
    const PATH_HANDLER = process.env.REACT_APP_API_PATH_HANDLER;

    useBirthdate(watch, now, setIsValideDate, setAgeUnderEi);

    const mobileOnClick = () => {
        if (ageUnderEi || errors?.firstName || errors?.secondName || errors?.day || errors?.month || errors?.year || !isValideDate || watch('firstName') === '' || watch('secondName') === '' || watch('day') === '' || watch('month') === '' || watch('year') === '') {
            return;
        } else {
            setPageMobile(2);
        }
    }

    const validCont = async () => {
        if (!canClick || ageUnderEi || errors?.firstName || errors?.secondName || errors?.day || errors?.month || errors?.year || errors?.phone || errors?.card || !isValideDate || watch('firstName') === '' || watch('secondName') === '' || watch('day') === '' || watch('month') === '' || watch('year') === '' || phone === '' || errorCard) {
            return;
        } else {
            setCanClick(false);
            const response = await teacherPhoneCheck(phone.replace(/[^+\d]/g, ''), PATH, TOKEN, AUTH);
            if (response === true) {
                setCanClick(true);
                setPage(2);
                setPageMobile(3)
            } else if (response === false) {
                setCanClick(true);
                setError('phone', { type: 'custom', message: 'Даний номер телефону вже зареєстровано' })
            } else if (response === undefined) {
                setCanClick(true);
                setIsModalVisible(true);
                setIsSuccess(false);
                setTimeout(() => {
                    setIsModalVisible(false);
                }, 4000);
            }
        }
    }

    const toFourthFunc = async () => {
        const response = await teacherEmailCheck(email, PATH, TOKEN, AUTH);
        if (response === true) {
            setPageMobile(4);
        } else if (response === false) {
            setError('email', { type: 'custom', message: 'Дану ел. пошту вже зареєстровано' })
            return;
        } else {
            setIsModalVisible(true);
            setIsSuccess(false);
            setTimeout(() => {
                setIsModalVisible(false);
            }, 5000);
            return;
        }
    }

    const registerFunc = async () => {
        const response = await teacherEmailCheck(email, PATH, TOKEN, AUTH);
        if (response === true) {
            const responsePOST = await teacherPOST({ cardNumber: card.replace(/\D/g, ''), dateOfBirth: `${year}-${month}-${day}`, email: email, firstname: firstName, lastname: secondName, password: password, phoneNumber: ('+' + phone.replace(/\D/g, '')) }, PATH, TOKEN, AUTH, 'user');
            if (responsePOST.status !== 200) {
                setIsSuccess(false);
                setIsModalVisible(true);
                setTimeout(() => setIsModalVisible(false), 5000);
                return;
            } else {
                setIsSuccess(true);
                setIsModalVisible(true);
                setTimeout(() => setIsModalVisible(false), 8000);
                await teacherPOST({ email: email, firstname: transformString(firstName), lastname: transformString(secondName), password: password, phoneNumber: ('+' + phone.replace(/\D/g, '')) }, PATH_HANDLER, TOKEN, AUTH, 'teacher');
                setTimeout(() => {
                    window.location.href = 'https://www.facebook.com/MyEnglishHomeBoryspil';
                }, 5000);
                return;
            }
        } else if (response === false) {
            setError('email', { type: 'custom', message: 'Дану ел. пошту вже зареєстровано' })
            return;
        } else {
            setIsModalVisible(true);
            setIsSuccess(false);
            setTimeout(() => {
                setIsModalVisible(false);
            }, 5000);
            return;
        }
    }

    return (
        isModalVisible ? <Modal isSuccess={isSuccess} /> :
            !isMobile ? <div className={c.main}>
                <div className={c.flex}>
                    {page === 1 ? <FirstPage card={card} errorCard={errorCard} setCard={setCard} setCardError={setCardError} phone={phone} setPhone={setPhone} ageUnderEi={ageUnderEi} isValideDate={isValideDate} now={now} clearErrors={clearErrors} watch={watch} setError={setError} register={register} errors={errors} day={day} setDay={setDay} month={month} setMonth={setMonth} year={year} setYear={setYear} firstName={firstName} setFirstName={setFirstName} setSecondName={setSecondName} secondName={secondName} /> : <SecondPage passwordCheck={passwordCheck} setPasswordCheck={setPasswordCheck} password={password} setPassword={setPassword} email={email} setEmail={setEmail} register={register} errors={errors} setError={setError} clearErrors={clearErrors} />}
                    <ImageRight page={page} />
                </div>
                {page === 1 ? <div className={c.buttCont}>
                    <button className={c.btnGrad} onClick={validCont}>Далі</button>
                </div> : <div className={c.buttContReg}>
                    <div className={c.buttBack} onClick={() => setPage(1)}>Назад</div>
                    <button className={errors?.email || errors?.password || password !== passwordCheck || !watch('behavior') || !watch('contract') ? c.btnGrad + ' ' + c.btnGradReg : c.btnGrad + ' ' + c.btnGradReg + ' ' + c.btnActive} onClick={errors?.email || errors?.password || password !== passwordCheck || !watch('behavior') || !watch('contract') ? null : registerFunc}>Зареєструватись</button>
                    <div></div>
                </div>}
            </div> :
                <div className={c.main}>
                    <div className={c.flex}>
                        {pageMobile === 1 && <FirstPage isMobile={isMobile} phone={phone} setPhone={setPhone} ageUnderEi={ageUnderEi} isValideDate={isValideDate} now={now} clearErrors={clearErrors} watch={watch} setError={setError} register={register} errors={errors} day={day} setDay={setDay} month={month} setMonth={setMonth} year={year} setYear={setYear} firstName={firstName} setFirstName={setFirstName} setSecondName={setSecondName} secondName={secondName} card={card} setCard={setCard} />}
                        {pageMobile === 2 && <ThirdPage isMobile={isMobile} errorCard={errorCard} card={card} setCard={setCard} setCardError={setCardError} phone={phone} setPhone={setPhone} clearErrors={clearErrors} setError={setError} register={register} errors={errors} />}
                        {pageMobile === 3 && <SecondPage isMobile={isMobile} passwordCheck={passwordCheck} setPasswordCheck={setPasswordCheck} password={password} setPassword={setPassword} email={email} setEmail={setEmail} register={register} errors={errors} setError={setError} clearErrors={clearErrors} />}
                        {pageMobile === 4 && <div><h3 className={c.h3}>Обов'язково ознайомтесь</h3><CheckboxInputs isMobile={isMobile} register={register} /></div>}
                    </div>
                    {pageMobile === 1 && <div className={c.buttCont}><div className={c.buttBackINVIS}>Назад</div><button className={c.btnGrad} onClick={() => { if (ageUnderEi || errors?.firstName || errors?.secondName || errors?.day || errors?.month || errors?.year || !isValideDate || watch('firstName') === '' || watch('secondName') === '' || watch('day') === '' || watch('month') === '' || watch('year') === '') { return } else { setPageMobile(2) } }}>Далі</button></div>}{/*onClick={mobileOnClick}*/}
                    {pageMobile === 2 && <div className={c.buttContReg}>
                        <div className={c.buttCont}><div className={c.buttBack} onClick={() => setPageMobile(1)}>Назад</div><button className={c.btnGrad} onClick={() => { if (!canClick || ageUnderEi || errors?.firstName || errors?.secondName || errors?.day || errors?.month || errors?.year || errors?.phone || errors?.card || !isValideDate || watch('firstName') === '' || watch('secondName') === '' || watch('day') === '' || watch('month') === '' || watch('year') === '' || phone === '' || errorCard) { return } else { setPageMobile(3) } }}>Далі</button></div> {/*onClick={validCont}*/}
                        <div></div>
                    </div>}
                    {pageMobile === 3 && <div className={c.buttContReg}>
                        <div className={c.buttCont}><div className={c.buttBack} onClick={() => setPageMobile(2)}>Назад</div><button className={c.btnGrad} onClick={errors?.email || errors?.password || password !== passwordCheck || watch('password') === '' || watch('email') === '' ? null : () => setPageMobile(4)}>Далі</button></div>{/*onClick={errors?.email || errors?.password || password !== passwordCheck || watch('password') === '' || watch('email') === '' ? null : toFourthFunc}*/}
                        <div></div>
                    </div>}
                    {pageMobile === 4 && <div className={c.buttContReg}>
                        <div className={c.buttCont}><div className={c.buttBack} onClick={() => setPageMobile(3)}>Назад</div><button className={c.btnGrad} onClick={!watch('behavior') || !watch('contract') ? null : () => {
                            setIsSuccess(true);
                            setIsModalVisible(true);
                            setTimeout(() => setIsModalVisible(false), 8000);
                            setTimeout(() => {
                                window.location.href = 'https://www.facebook.com/MyEnglishHomeBoryspil';
                            }, 5000);
                        }}>Далі</button></div>{/*onClick={!watch('behavior') || !watch('contract') ? null : registerFunc}*/}
                        <div></div>
                    </div>}
                </div>
    )
}
