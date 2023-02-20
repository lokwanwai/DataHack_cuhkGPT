import './Navbar.css'
/*import font-awesome icons*/
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faYoutube} from '@fortawesome/free-brands-svg-icons'
/*import images*/
import Logo from './images/Logo.svg'

const Navbar = () =>{
    const number = ['Business Management', 
                    'Market Analyze', 
                    'Market Trace', 
                    4, 5,6]; //input your data

    const listitems = number.map(number => <button className='btn'>{number}</button>);

    return(
        <div className='Navbar'>
            <img src={Logo} alt="Logo" className='Logo'/>
            {listitems}
        </div>
    );
}

export default Navbar;