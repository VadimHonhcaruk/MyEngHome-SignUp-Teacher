import React from 'react';
import c from './Email.module.css';
import { Error } from '../Error';
import m from '../MobileInput.module.css';

export const Email = ({ isMobile, email, setEmail, register, errors }) => {

    return (!isMobile ? <>
        <div className={errors?.email ? c.errorStyle : c.center}>
            <input id='email' {...register("email", { onChange: (e) => { setEmail(e.target.value); }, required: { value: true, message: "Заповніть поле" }, pattern: { value: /^[a-zA-Z0-9._-]+@[a-zA-Z]+(\.[a-zA-Z]{1,4})+$/, message: `Поле має бути у форматі: email@example.com` } })} value={email} type="email" name="email" maxLength="100" />
            <label htmlFor="email" id={email !== '' ? c.fill : undefined}>Електронна адреса</label>
        </div>
        <p className={c.p}>{(errors?.email) ? <><Error />&nbsp;&nbsp;{errors?.email?.message}</> : <span className={c.mail}>Можна використовувати літери, цифри та крапки</span>}</p>

    </> :
        <>
            <div className={errors?.email ? m.errorStyleMobile : m.inputBoxMobile}>
                <input id='email' {...register("email", { onChange: (e) => { setEmail(e.target.value); }, required: { value: true, message: "Заповніть поле" }, pattern: { value: /^[a-zA-Z0-9._-]+@[a-zA-Z]+(\.[a-zA-Z]{1,4})+$/, message: `Поле має бути у форматі: email@example.com` } })} value={email} type="email" name="email" maxLength="100" />
                <label htmlFor="email" className={m.fin} id={email !== '' ? m.fillMobile : undefined}>Електронна адреса</label>
            </div>
            <p className={c.p}>{(errors?.email) ? <><Error />&nbsp;&nbsp;{errors?.email?.message}</> : <span className={c.mail}>Можна використовувати літери, цифри та крапки</span>}</p>

        </>
    )
}