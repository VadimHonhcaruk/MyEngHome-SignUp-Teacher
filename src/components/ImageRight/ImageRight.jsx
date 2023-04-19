import React from 'react';
import image from '../../images/who.png';
import group from '../../images/group.png';
import c from './ImageRight.module.css';

export const ImageRight = ({ page }) => {
    return (
        (page === 1) ? <div className={c.contImage}><img alt="who am i?" src={image} className={c.image}></img></div> :
            <div className={c.contImageG}><img alt="group?" src={group} className={c.imageG}></img></div>
    )
}
