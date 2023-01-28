import logo from '../../../assets/cater_factory.jpg';
import { Logo, NavItems, SearchBar } from './NavBar';
const Header = () => {
    return (
        <div className='header'>
            <Logo logo={logo} />
            <SearchBar />
            <NavItems />
        </div>
    );
};

export default Header;