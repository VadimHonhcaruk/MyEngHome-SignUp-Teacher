import c from './Checkbox.module.css'

export const CheckboxInputs = ({ isMobile, register }) => {

    return (
        !isMobile ?
            <>
                <div className={c.check}>
                    <input className={c.customCheckbox} id="contract" name="contract" type="checkbox" {...register("contract", { required: true })} />
                    <label htmlFor="contract"><p>Я погоджуюсь з умовами&nbsp;<a className={c.hypertext} target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1DFVQbG8q6yzFIINMsRxaq6BhFjfQdl98/view">договору про співпрацю</a><br />з студією “My English Home”</p></label>
                </div>
                <div className={c.check}>
                    <input className={c.customCheckbox} id="behavior" name="behavior" type="checkbox" {...register("behavior", { required: true })} />
                    <label htmlFor="behavior"><p>Я погоджуюсь з умовами&nbsp;<a className={c.hypertext} target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1ZvvWaU2AMIOG5p0WLvVgbLJv9NFMa2ab/view">договору про <br />нерозголошення</a> студії “My English Home”</p></label>
                </div>
            </> :
            <>
                <div className={c.check}>
                    <input className={c.customCheckbox} id="contract" name="contract" type="checkbox" {...register("contract", { required: true })} />
                    <label htmlFor="contract"><p>Я погоджуюсь з умовами&nbsp;<a className={c.hypertext} target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1DFVQbG8q6yzFIINMsRxaq6BhFjfQdl98/view">договору про співпрацю</a>з студією “My English Home”</p></label>
                </div>
                <div className={c.check}>
                    <input className={c.customCheckbox} id="behavior" name="behavior" type="checkbox" {...register("behavior", { required: true })} />
                    <label htmlFor="behavior"><p>Я погоджуюсь з умовами&nbsp;<a className={c.hypertext} target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1ZvvWaU2AMIOG5p0WLvVgbLJv9NFMa2ab/view">договору про нерозголошення</a> студії “My English Home”</p></label>
                </div>
            </>
    )
}