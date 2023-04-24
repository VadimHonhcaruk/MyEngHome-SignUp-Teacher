import { useState, useEffect } from "react";

export const useBirthdate = (watch, now, setIsValideDate, setAgeUnderEi) => {
    const [age, setAge] = useState(18);
    const dateOfBirthWatch = watch(['year', 'month', 'day']);
    useEffect(() => {
        const day = watch('day');
        const month = watch('month');
        const year = watch('year');
        if (day === '' || month === '' || year === '') {
            return;
        }
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        setIsValideDate(true);
        const dob = new Date(year, month - 1, day);
        const valid = new Date(year, month - 1, 1);
        if (dob.getMonth() !== valid.getMonth()) {
            setIsValideDate(false);
        };
        const dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());
        setAge(today.getFullYear() - dob.getFullYear());
        if (today < dobnow) {
            setAge(prev => prev - 1);
        };
        age < 15 ? setAgeUnderEi(true) : setAgeUnderEi(false);
    }, [now, setAgeUnderEi, setIsValideDate, dateOfBirthWatch, age, watch])
}