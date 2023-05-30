import img from '../images/team-working.avif'

import {FiInstagram} from 'react-icons/fi'
import {FiFacebook} from 'react-icons/fi'
import {RxTwitterLogo} from 'react-icons/rx'
import {FaWhatsapp} from 'react-icons/fa'
let Right = () => {
    return(
      <div className="right">
      <nav>
        <ul>
            <li>HOME</li>
            <li>EVENT</li>
            <li>PROGRAMS</li>
            <li>CONTACT</li>
       <button className="btn1">JOIN US</button>
        </ul>
    </nav>
    <div className="photo">
    <img src={img} alt="my image" />
    </div>
    <div className="footer">
      <div className='fbox'>
        <div className='live'>live</div>
      </div> 
      <div className='myicons'>
    <FiInstagram className='icons'/>
    <FiFacebook className='icons'/>
    <RxTwitterLogo className='icons'/>
    <FaWhatsapp className='icons'/>
    </div>
    </div>
    
      </div>
    );
}
export default Right;