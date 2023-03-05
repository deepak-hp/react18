import { React, useContext } from "react";
import UserContext from "../../utils/UserContext";

const Footer = () => {
    const { user } = useContext(UserContext)
    return (
        <div className='footer'>
            <div>Made with 💖 {user.name} {user.email} for India</div>
        </div>
    );
};

export default Footer