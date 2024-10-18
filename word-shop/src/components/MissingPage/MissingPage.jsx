import { Link } from 'react-router-dom';
import '../../components/MissingPage/MissingPage.css'; 
import whoops from '../MissingPage/whoops.png';


function MissingPage() {
    return(
        <>
            <img src={whoops} className='whoops__image' alt='whoops'></img>
            <h2 className='missing-page__title'>The site you’re looking for doesn’t exist.</h2>
            <Link to='/'>Take me home.</Link>
        </>
    );
   
}
export default MissingPage;