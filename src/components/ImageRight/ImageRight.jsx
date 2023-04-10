import React from 'react';
import image from '../../images/logo_meh_mono.png';
import c from './ImageRight.module.css';

export const ImageRight = () => {
    return (
        <div className={c.contImage}><img alt="who am i?" src={image} className={c.image}></img></div>
    )
}
