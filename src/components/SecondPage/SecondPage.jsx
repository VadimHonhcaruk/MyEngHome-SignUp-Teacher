import React from 'react';
import c from "./SecondPage.module.css";
import { Email } from '../Email/Email';
import { Password } from '../Password/Password';
import { CheckboxInputs } from '../Checkbox/Checkbox';

export const SecondPage = ({ isMobile, passwordCheck, setPasswordCheck, password, setPassword, email, setEmail, register, errors, setError, clearErrors }) => {
    return (!isMobile ?
        <div className={c.cont}>
            <h2 className={c.h2}>Реєстрація викладача</h2>
            <h3 className={c.h3}>Надайте ел. пошту та пароль для трекера</h3>
            <Email email={email} setEmail={setEmail} register={register} errors={errors} />
            <Password passwordCheck={passwordCheck} setPasswordCheck={setPasswordCheck} password={password} setPassword={setPassword} register={register} errors={errors} setError={setError} clearErrors={clearErrors} />
            <CheckboxInputs isMobile={isMobile} register={register} />
        </div> :
        <div className={c.cont}>
            <h3 className={c.h3}>Надайте ел. пошту та пароль для трекера</h3>
            <Email isMobile={isMobile} email={email} setEmail={setEmail} register={register} errors={errors} />
            <Password isMobile={isMobile} passwordCheck={passwordCheck} setPasswordCheck={setPasswordCheck} password={password} setPassword={setPassword} register={register} errors={errors} setError={setError} clearErrors={clearErrors} />
        </div>
    )
}
