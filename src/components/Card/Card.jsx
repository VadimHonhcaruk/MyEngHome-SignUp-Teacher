import React, { useState } from 'react';
import c from './Card.module.css';

export const Card = ({ register }) => {

    const [card, setCard] = useState('');

    return (<>
        <div className={c.center}>
            <input id='card' {...register("card", { onChange: (e) => { setCard(e.target.value); } }, { required: { value: true, message: "Заповніть поле" } })} value={card} type="text" name="card" maxLength="19" />
            <label htmlFor="card" id={card !== '' && c.fill}>Банківська карта</label>
        </div>
        <span className={c.crd}>Карта для переказу коштів за надані послуги</span>
    </>
    )
}