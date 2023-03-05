import { useContext } from "react";
import { Link } from "react-router-dom";
import { IMG_BASE_URL } from "../../constants";
import UserContext from "../../utils/UserContext";


const Card = ({ restaurant, ...rest }) => {
    const { user } = useContext(UserContext);
    const { name, cuisines, avgRating, cloudinaryImageId, id } = restaurant;
    const imgURL = `${IMG_BASE_URL}${cloudinaryImageId}`
    return (
        <div className='cardContainer' {...rest}>
            <Link to={`/restaurants/${id}`} style={{ textDecoration: "none" }}>
                <img className="cardImage" src={imgURL} alt="" width="60px" height="40px" />
                <h2 className="font-bold text-xl">{name}</h2>
                <h3 className="text-md">{cuisines.join(",")}</h3>
                <h4 className="font-medium">{avgRating}</h4>
                <h5 className="font-medium">{user.name}</h5>
                <h5 className="font-medium">{user.email}</h5>
            </Link>
        </div>
    )
}

export default Card