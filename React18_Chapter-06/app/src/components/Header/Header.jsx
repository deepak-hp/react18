import logo from '../../../assets/cater_factory.jpg';
import { Logo, NavItems } from './NavBar';
const Header = () => {
    return (
        <div className='header'>
            <Logo logo={logo} />
            <NavItems />
        </div>
    );
};

export default Header;