import './Topbar.css'
/*import font-awesome icons*/
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
/*import images*/
import Square from './images/Vector.svg'
import Company from './images/Company.svg'

const Topbar = () =>{
    return(
        <div className='topbar'>
            <div className='userbar'>
            <img src={Square} alt="Square" className='square'/>
            <h1>Welcome!</h1>
            <button className='btn'>Logout</button>
            <img src={Company} alt="Square" className='square'/>
            </div>
        </div>
    );
}

export default Topbar;