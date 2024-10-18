import { Link } from 'react-router-dom';
import '../PlayButton/PlayButton.css';
import PlayButton from '../PlayButton/Start-playing-btn.png';

function Play() {
    return(
       
    <Link to='/play'>
        <img src={PlayButton} className='play-icon__image' alt='play-icon'></img>
    </Link>
    );
   
}
export default Play;