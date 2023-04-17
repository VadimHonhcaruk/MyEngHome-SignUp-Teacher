import React, { useState } from 'react';
import c from './Phone.module.css';
import { inputChange, onfocusInput } from '../../function/phoneInput';
import { Error } from '../Error';

export const Phone = ({ register, errors, clearErrors }) => {
    const [queryPhone, setQueryPhone] = useState('+38 (098) 316 93 48');
    const [phone, setPhone] = useState('');

    return (<>
        <div className={errors?.phone ? c.errorStyle : c.center}>
            <input id='phone' onFocus={(e) => onfocusInput(e, setPhone)} onInput={inputChange} {...register("phone", { onChange: (e) => { setPhone(e.target.value); }, required: { value: true, message: "Заповніть поле" }, pattern: { value: /^\+38\s\(0\d{2}\)\s\d{3}\s\d{2}\s\d{2}$/, message: `Поле має бути у форматі: +380XXXXXXXXX` } })} value={phone} type="tel" name="phone" maxLength="19" />
            <label htmlFor="phone" id={phone !== '' && c.fill}>Номер телефону</label>
        </div>
        <p className={c.p}>{(errors?.phone) ? <Error /> : null}&nbsp;&nbsp;{errors?.phone?.message}</p>
        <span className={c.phn} onClick={() => { setPhone(queryPhone); clearErrors('phone'); }}>Вставити +380983169348, як номер телефону</span>
    </>
    )
}