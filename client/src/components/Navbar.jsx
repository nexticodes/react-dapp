import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import logo from '../../images/logo.png';


const Navbar = () => {
    return (
        <nav className="w-full flex md:justify-center">
            <img src={logo}></img>
            <HiMenuAlt4/>
            <AiOutlineClose/>
        </nav>
    )
}

export default Navbar;