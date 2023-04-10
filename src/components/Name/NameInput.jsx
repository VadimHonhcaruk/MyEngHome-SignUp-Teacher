import { useState } from 'react';
import { onChangeInputName } from '../../function/nameInput';
import c from './NameInput.module.css';

export const NameInput = ({ clearErrors, watch, setError, register, errors }) => {

    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');



    return (
        <>
            <div className={c.center}>
                <div className={c.inputBox}>
                    <input id="firstName" value={firstName} {...register('firstName', { onChange: (e) => { setFirstName(e.target.value); onChangeInputName(watch('firstName'), setError, clearErrors, 'firstName') }, required: { value: true, message: "Заповніть поле" }, maxLength: 30, pattern: { value: /^(?!.*(?:['-]){2,})(?!['-])(?!.*(?:['-]$))(?:[А-Яа-яЁёІіЇїЄє']+['-]?)*[А-Яа-яЁёІіЇїЄє']+$/, message: "Поле може містити тільки літери, апостроф та тире" }, })} type="text" maxLength="30" />
                    <label htmlFor="firstName" className={c.fir} id={firstName !== '' && c.fill} >Ім'я</label>
                </div>
                <div className={c.inputBox}>
                    <input id="secondName" value={secondName} {...register('secondName', { onChange: (e) => { setSecondName(e.target.value); onChangeInputName(watch('secondName'), setError, clearErrors, 'secondName') }, required: { value: true, message: " Заповніть поле" }, maxLength: 30, pattern: { value: /^(?!.*(?:['-]){2,})(?!['-])(?!.*(?:['-]$))(?:[А-Яа-яЁёІіЇїЄє']+['-]?)*[А-Яа-яЁёІіЇїЄє']+$/, message: " Поле може містити тільки літери, апостроф та тире" }, })} type="text" maxLength="30" />
                    <label htmlFor="secondName" className={c.fin} id={secondName !== '' && c.fill} >Прізвище</label>
                </div>
            </div>
        </>)
}