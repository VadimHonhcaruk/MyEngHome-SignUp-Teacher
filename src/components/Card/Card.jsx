import React, { useState } from 'react';
import c from './Card.module.css';
import { Error } from '../Error';

export const Card = ({ register, errors }) => {

    const [card, setCard] = useState('');

    return (<>
        <div className={errors?.phone ? c.errorStyle : c.center}>
            <input id='card' {...register("card", { onChange: (e) => { setCard(e.target.value); } })} value={card} type="text" name="card" maxLength="19" />
            <label htmlFor="card" id={card !== '' && c.fill}>Банківська карта</label>
        </div>
        {(errors?.card) ? <p className={c.p}><Error />&nbsp;&nbsp;{errors?.card?.message}</p> :
            <span className={c.crd}>Карта для переказу коштів за надані послуги</span>}
    </>
    )
}