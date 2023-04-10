export const onChangeInputName = (e, setError, clearErrors, name) => {
    if (!(/^(?!.*(?:['-]){2,})(?!['-])(?!.*(?:['-]$))(?:[А-Яа-яЁёІіЇїЄє']+['-]?)*[А-Яа-яЁёІіЇїЄє']+$/).test(e)) {
        setError(name, { type: 'custom', message: 'Поле може містити тільки літери, апостроф та тире' })
    } else {
        clearErrors(name);
    }
}