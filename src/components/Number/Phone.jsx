import React, { useState, useEffect } from 'react';
import c from './Phone.module.css';
import { inputChange, onfocusInput } from '../../function/phoneInput';
import { Error } from '../Error';
import m from '../MobileInput.module.css';

export const Phone = ({ isMobile, phone, setPhone, register, errors, clearErrors }) => {
    const [queryPhone, setQueryPhone] = useState('');

    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        let x = queryParams.get("phoneNumber");
        if (x) x = x.replace(/^./, '+');
        const regex = /^\+380\d{9}$/;
        if (x && regex.test(x)) {
            x = x.replace(/\D/g, '').match(/(\d{0,5})(\d{0,3})(\d{0,2})(\d{0,2})/);
            setQueryPhone(!x[2] ? '+' + x[1] : '+38 (' + x[1][2] + x[1][3] + x[1][4] + ') ' + x[2] + (x[3] ? ' ' + x[3] : '') + (x[4] ? ' ' + x[4] : ''));
        }
    }, [])

    return (!isMobile ? <>

        <div className={errors?.phone ? c.errorStyle : c.center}>
            <input id='phone' onFocus={(e) => onfocusInput(e, setPhone)} onInput={inputChange} {...register("phone", { onChange: (e) => { setPhone(e.target.value); }, required: { value: true, message: "Заповніть поле" }, pattern: { value: /^\+38\s\(0\d{2}\)\s\d{3}\s\d{2}\s\d{2}$/, message: `Поле має бути у форматі: +380XXXXXXXXX` } })} value={phone} type="tel" name="phone" maxLength="19" />
            <label htmlFor="phone" id={phone !== '' ? c.fill : undefined}>Номер телефону</label>
        </div>
        <p className={c.p}>{(errors?.phone) ? <span><Error />&nbsp;&nbsp;{errors?.phone?.message}</span> : queryPhone && <span className={c.phn} onClick={() => { setPhone(queryPhone); clearErrors('phone'); }}>Вставити {queryPhone}, як номер телефону</span>}</p>
    </> : <>
        <div className={errors?.phone ? m.errorStyleMobile : m.inputBoxMobile}>
            <input id='phone' onFocus={(e) => onfocusInput(e, setPhone)} onInput={inputChange} {...register("phone", { onChange: (e) => { setPhone(e.target.value); }, required: { value: true, message: "Заповніть поле" }, pattern: { value: /^\+38\s\(0\d{2}\)\s\d{3}\s\d{2}\s\d{2}$/, message: `Поле має бути у форматі: +380XXXXXXXXX` } })} value={phone} type="tel" name="phone" maxLength="19" />
            <label htmlFor="phone" className={m.fin} id={phone !== '' ? m.fillMobile : undefined}>Номер телефону</label>
        </div>
        <p className={c.p}>{(errors?.phone) ? <span><Error />&nbsp;&nbsp;{errors?.phone?.message}</span> : queryPhone && <span className={c.phn} onClick={() => { setPhone(queryPhone); clearErrors('phone'); }}>Вставити {queryPhone}, як номер телефону</span>}</p>
    </>
    )
}