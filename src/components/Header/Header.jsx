import c from "./Header.module.css";
import logo from "../../images/logo.png";
import mobilelogo from '../../images/mobilelogo.png';

export const Header = ({ isMobile }) => {
    return (
        <header className={c.header}>
            <a href='https://www.facebook.com/MyEnglishHomeBoryspil' className={c.logoA}><img className={c.logo} src={isMobile ? mobilelogo : logo} alt="logo"></img></a>
            {isMobile && <div className={c.flextitle}><p className={c.title}>Реєстрація</p><p className={c.title}>викладача</p></div>}
        </header>
    )
}
