import React, { useState } from 'react';
import c from './Password.module.css';
import { Error } from '../Error';
import m from '../MobileInput.module.css';

export const Password = ({ isMobile, passwordCheck, setPasswordCheck, password, setPassword, register, errors, setError, clearErrors }) => {

    const [passOneHide, setPassOneHide] = useState(false);
    const [passTwoHide, setPassTwoHide] = useState(false);

    const samePassCheck = () => {
        if (password === '' || passwordCheck === '' || errors?.password) {
            console.log('CHEC1')
            return;
        }

        if (password !== passwordCheck) {
            console.log('CHECk2')
            setError('password', { type: 'custom', message: 'Паролі не збігаються' });
        } else {
            console.log('CHECk3')
            clearErrors('password');
        }
    }


    return (!isMobile ? <>
        <div className={errors?.password ? c.errorStyle : c.center}>
            <div>
                <input id='password' {...register("password", { onBlur: () => { samePassCheck() }, onChange: (e) => { setPassword(e.target.value); }, required: { value: true, message: "Заповніть поле" }, pattern: { value: /^[A-Za-z0-9!@#$%^&*()_+={}[\]|\\:;"'<,>.?/]{8,100}$/, message: `Пароль має містити мінімум 8 літер (a-z), цифр (0-9) та символів` } })} value={password} type={passOneHide ? "text" : "password"} name="password" minLength='8' maxLength="100" />
                <label className={c.wiPass} htmlFor="password" id={password !== '' ? c.fill : undefined}>Пароль</label>
                <span onClick={() => setPassOneHide(prev => !prev)} className={c.hide}> {passOneHide ? <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M1 12C1 12 5 20 12 20C19 20 23 12 23 12" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="12" r="3" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg> : <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 2L22 22" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6.71277 6.7226C3.66479 8.79527 2 12 2 12C2 12 5.63636 19 12 19C14.0503 19 15.8174 18.2734 17.2711 17.2884M11 5.05822C11.3254 5.02013 11.6588 5 12 5C18.3636 5 22 12 22 12C22 12 21.3082 13.3317 20 14.8335" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14 14.2362C13.4692 14.7112 12.7684 15.0001 12 15.0001C10.3431 15.0001 9 13.657 9 12.0001C9 11.1764 9.33193 10.4303 9.86932 9.88818" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>}</span>
            </div><div>
                <input id='passwordCheck' className={c.marg} {...register("passwordCheck", { onBlur: () => { samePassCheck() }, onChange: (e) => { setPasswordCheck(e.target.value); }, required: { value: true, message: "Заповніть поле" } })} value={passwordCheck} type={passTwoHide ? "text" : "password"} name="passwordCheck" minLength='8' maxLength="100" />
                <label className={c.wiPassTw} htmlFor="passwordCheck" id={passwordCheck !== '' ? c.fill : undefined}>Підтвердити</label>
                <span onClick={() => setPassTwoHide(prev => !prev)} className={c.hide2}>{passTwoHide ? <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M1 12C1 12 5 20 12 20C19 20 23 12 23 12" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="12" r="3" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg> : <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 2L22 22" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6.71277 6.7226C3.66479 8.79527 2 12 2 12C2 12 5.63636 19 12 19C14.0503 19 15.8174 18.2734 17.2711 17.2884M11 5.05822C11.3254 5.02013 11.6588 5 12 5C18.3636 5 22 12 22 12C22 12 21.3082 13.3317 20 14.8335" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14 14.2362C13.4692 14.7112 12.7684 15.0001 12 15.0001C10.3431 15.0001 9 13.657 9 12.0001C9 11.1764 9.33193 10.4303 9.86932 9.88818" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>}</span>
            </div>
        </div>
        <p className={c.p}>{(errors?.password) ? <><Error />&nbsp;&nbsp;{errors?.password?.message}</> : <span className={c.pass}>Використовуйте комбінацію з 8 або більше літер, цифр і символів</span>}</p>

    </> :
        <>
            <div className={errors?.password ? m.errorStyleMobile : m.inputBoxMobile}>
                <input id='password' {...register("password", { onBlur: () => { samePassCheck() }, onChange: (e) => { setPassword(e.target.value); }, required: { value: true, message: "Заповніть поле" }, pattern: { value: /^[A-Za-z0-9!@#$%^&*()_+={}[\]|\\:;"'<,>.?/]{8,100}$/, message: `Пароль має містити мінімум 8 літер (a-z), цифр (0-9) та символів` } })} value={password} type={passOneHide ? "text" : "password"} name="password" minLength='8' maxLength="100" />
                <label className={m.fin} htmlFor="password" id={password !== '' ? m.fillMobile : undefined}>Пароль</label>
            </div>
            <span onClick={() => setPassOneHide(prev => !prev)} className={c.hide}> {passOneHide ? <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M1 12C1 12 5 20 12 20C19 20 23 12 23 12" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="12" r="3" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg> : <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2L22 22" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.71277 6.7226C3.66479 8.79527 2 12 2 12C2 12 5.63636 19 12 19C14.0503 19 15.8174 18.2734 17.2711 17.2884M11 5.05822C11.3254 5.02013 11.6588 5 12 5C18.3636 5 22 12 22 12C22 12 21.3082 13.3317 20 14.8335" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14 14.2362C13.4692 14.7112 12.7684 15.0001 12 15.0001C10.3431 15.0001 9 13.657 9 12.0001C9 11.1764 9.33193 10.4303 9.86932 9.88818" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>}</span>
            <div className={errors?.password ? m.errorStyleMobile : m.inputBoxMobile} id={c.mar}>
                <input id='passwordCheck' {...register("passwordCheck", { onBlur: () => { samePassCheck() }, onChange: (e) => { setPasswordCheck(e.target.value); }, required: { value: true, message: "Заповніть поле" } })} value={passwordCheck} type={passTwoHide ? "text" : "password"} name="passwordCheck" minLength='8' maxLength="100" />
                <label className={m.fin} htmlFor="passwordCheck" id={passwordCheck !== '' ? m.fillMobile : undefined}>Підтвердити</label>
            </div>
            <span onClick={() => setPassTwoHide(prev => !prev)} className={c.hide}>{passTwoHide ? <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M1 12C1 12 5 20 12 20C19 20 23 12 23 12" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="12" r="3" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg> : <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2L22 22" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.71277 6.7226C3.66479 8.79527 2 12 2 12C2 12 5.63636 19 12 19C14.0503 19 15.8174 18.2734 17.2711 17.2884M11 5.05822C11.3254 5.02013 11.6588 5 12 5C18.3636 5 22 12 22 12C22 12 21.3082 13.3317 20 14.8335" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14 14.2362C13.4692 14.7112 12.7684 15.0001 12 15.0001C10.3431 15.0001 9 13.657 9 12.0001C9 11.1764 9.33193 10.4303 9.86932 9.88818" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>}</span>
            <p className={c.p}>{(errors?.password) ? <><Error />&nbsp;&nbsp;{errors?.password?.message}</> : <span className={c.pass}>Використовуйте комбінацію з 8 або більше літер, цифр і символів</span>}</p>

        </>
    )
}