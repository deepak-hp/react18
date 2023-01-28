export const Logo = ({ logo }) => {
    return (
        <div className='logo'>
            <img src={logo} alt='Logo' width='90px' height='90px' />
        </div>
    );
};

export const SearchBar = () => {
    return (
        <div className='search'>
            <span className='searchIcon'>🔍</span>
            <input className='searchInput' type='text' placeholder='search...' />
        </div>
    );
};

export const NavItems = () => {
    return (
        <ul className='navItems'>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Cart</li>
        </ul>
    );
};