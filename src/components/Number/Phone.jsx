import React, { useState } from 'react';
import c from './Phone.module.css';
import { inputChange, onfocusInput } from '../../function/phoneInput';

export const Phone = ({ register }) => {

    const [phone, setPhone] = useState('');

    return (<>
        <div className={c.center}>
            <input id='phone' onFocus={(e) => onfocusInput(e, setPhone)} onInput={inputChange} {...register("phone", { onChange: (e) => { setPhone(e.target.value); } }, { required: { value: true, message: "Заповніть поле" }, pattern: { value: /^\+38\s\(0\d{2}\)\s\d{3}\s\d{2}\s\d{2}$/, message: `Поле має бути у форматі: +380XXXXXXXXX` } })} value={phone} type="tel" name="phone" maxLength="19" />
            <label htmlFor="phone" id={phone !== '' && c.fill}>Номер телефону</label>
        </div>
        <span className={c.phn}>Вставити +380983169348, як номер телефону</span>
    </>
    )
}