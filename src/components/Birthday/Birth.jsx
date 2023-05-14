import c from './Birth.module.css';
import { Error } from '../Error';
import { onlyNumb } from '../../function/onlyNumb';

export const Birth = ({ isMobile, day, setDay, month, setMonth, year, setYear, ageUnderEi, isValideDate, register, errors, now }) => {

    return (
        <>
            <span className={c.title}>Дата народження</span>
            <div className={c.center}>
                <div className={errors?.day ? c.errorStyle : c.inputBox}>
                    <input id="day" value={day} onInput={onlyNumb} {...register("day", { onChange: (e) => { setDay(e.target.value); }, required: "Заповніть поле", pattern: { value: /^(0?[1-9]|[12]\d|3[01])$/, message: "Поле може містити тільки цифри від 1 до 31" }, })} name="day" maxLength="2" />
                    <label htmlFor="day" className={c.day} id={day !== '' ? c.fill : undefined}>День</label>
                </div>
                <div className={errors?.month ? c.errorStyle : c.inputBox}>
                    <select id="month" value={month} {...register("month", { onChange: (e) => { setMonth(e.target.value); }, required: "Заповніть поле" })}>
                        <option value="" hidden></option>
                        <option value="1">Січень</option>
                        <option value="2">Лютий</option>
                        <option value="3">Березень</option>
                        <option value="4">Квітень</option>
                        <option value="5">Травень</option>
                        <option value="6">Червень</option>
                        <option value="7">Липень</option>
                        <option value="8">Серпень</option>
                        <option value="9">Вересень</option>
                        <option value="10">Жовтень</option>
                        <option value="11">Листопад</option>
                        <option value="12">Грудень</option>
                    </select>
                    <label htmlFor="month" className={c.month} id={month !== '' ? c.fill : undefined}>Місяць</label>
                </div>
                <div className={errors?.year ? c.errorStyle : c.inputBox}>
                    <input id="year" className={c.marg} value={year} onInput={onlyNumb} {...register("year", { onChange: (e) => { setYear(e.target.value); }, required: "Заповніть поле", pattern: { value: /^\d{4}$/, message: `Поле може містити значення від ${now.getFullYear() - 100} до ${now.getFullYear() - 15}` }, min: { value: now.getFullYear() - 100, message: `Поле може містити значення від ${now.getFullYear() - 100} до ${now.getFullYear() - 15}` }, max: { value: now.getFullYear() - 5, message: `Поле може містити значення від ${now.getFullYear() - 100} до ${now.getFullYear() - 15}` } })} name="year" maxLength="4" />
                    <label htmlFor="year" className={c.year} id={year !== '' ? c.fill : undefined}>Рік</label>
                </div>
            </div>
            <p className={c.p}>{(errors?.year || errors?.day || errors?.month || !isValideDate || ageUnderEi) ? <Error /> : null}&nbsp;&nbsp;{errors?.year?.message || errors?.day?.message || errors?.month?.message || (!isValideDate && "Такої дати не існує") || (ageUnderEi && 'Вам повинно бути мінімум 15 років')}</p>
        </>
    )
}
