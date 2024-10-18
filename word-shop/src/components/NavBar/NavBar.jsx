import '../NavBar/NavBar.css';
import Logo from '../NavBar/Logo/Logo';
import PlayButton from '../NavBar/PlayButton/PlayButton';

function NavBar() {
    return(
        <div className="navBar__container">
        <Logo/>
        <PlayButton/>
    </div>
    );
   
}
export default NavBar;