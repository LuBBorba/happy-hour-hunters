import './Header.scss';
import Logo from '../../assets/images/logo2.png';


export default function Header () {

    return ( 
    
    <header className='header'>
        <img className='header__logo' src={Logo} alt="Happy Hour Hunters Logo" />
        <h1 className='header__title'>Happy Hour Hunters</h1>
    </header>

    )
}