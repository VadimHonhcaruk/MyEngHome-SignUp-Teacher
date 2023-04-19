import c from './Checkbox.module.css'

export const CheckboxInputs = ({ setCheckerOne, setCheckerTwo, register }) => {

    return (
        <>
            <div className={c.check}>
                <input onChange={() => setCheckerOne(prev => !prev)} className={c.customCheckbox} id="contract" name="contract" type="checkbox" {...register("contract", { required: true })} />
                <label htmlFor="contract">Я погоджуюсь з умовами&nbsp;<a className={c.hypertext} target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/1VOXLZEnl7hI-sLmddRXSR0vLhGcG736_/edit">договору про співпрацю </a> &nbsp;з студією “My English Home”</label>
            </div>
            <div className={c.check}>
                <input onChange={() => setCheckerTwo(prev => !prev)} className={c.customCheckbox} id="behavior" name="behavior" type="checkbox" {...register("behavior", { required: true })} />
                <label htmlFor="behavior">Я погоджуюсь з умовами&nbsp;<a className={c.hypertext} target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/13cx8LsKCIvad_B45bRm3KLuTZiTOLcHC/edit">договору про нерозголошення </a> &nbsp;студії “My English Home”</label>
            </div>
        </>
    )
}