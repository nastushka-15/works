import { Link } from 'react-router-dom';
import '../../NavBar/Logo/Logo.css'; 
import logo from '../../NavBar/Logo/logo.png';
import butterfly from '../../../butterfly4.png';


function Logo() {
    return(
        <Link to='/'>
            <img src={logo} className='logo__image' alt='logo'></img>
        </Link>
    );
   
}
export default Logo;