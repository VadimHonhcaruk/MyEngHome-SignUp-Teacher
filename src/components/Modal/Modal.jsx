import c from './Modal.module.css';
import congrats from '../../images/congrats.png';
import trouble from '../../images/trouble.png'

export const Modal = ({ isSuccess }) => {
    return (
        <div className={c.modal}>
            <div>
                {isSuccess ? <p className={c.congrats}>Вітаємо!</p> : <p className={c.congrats}>От халепа!</p>}
                {isSuccess ? <p className={c.success}>Ви успішно <br></br> зареєструвалися</p> : <p className={c.success}>сталася помилка<br></br>спробуйте пізніше</p>}
                <img className={isSuccess ? c.image : c.imageTrouble} src={isSuccess ? congrats : trouble} alt="congrats"></img>
            </div>
        </div>
    )
}
