import './Navbar.css'
/*import font-awesome icons*/
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faYoutube} from '@fortawesome/free-brands-svg-icons'
/*import images*/
import Logo from './images/Logo.svg'

const Navbar = () =>{
    const items = [
        {
            "text": "Business Management",
        },
        {
            "text": "Market Analyze",
        },
        {
            "text": "Market Trace",
        },
        {
            "text": "",
        }
    ]; //input your data

    const listitems = items.map(
        item => <button className='btn'>{item.text}</button>
        );

    return(
        <div className='Navbar'>
            <img src={Logo} alt="Logo" className='Logo'/>
            {listitems}
        </div>
    );
}

export default Navbar;