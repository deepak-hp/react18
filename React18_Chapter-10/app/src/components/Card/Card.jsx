import { Link } from "react-router-dom";
import { IMG_BASE_URL } from "../../constants";

const Card = ({ restaurant, ...rest }) => {
    const { name, cuisines, avgRating, cloudinaryImageId, id } = restaurant;
    const imgURL = `${IMG_BASE_URL}${cloudinaryImageId}`
    return (
        <div className='cardContainer' {...rest}>
            <Link to={`/restaurants/${id}`} style={{ textDecoration: "none" }}>
                <img className="cardImage" src={imgURL} alt="" width="60px" height="40px" />
                <h2 className="font-bold text-xl">{name}</h2>
                <h3 className="text-md">{cuisines.join(",")}</h3>
                <h4 className="font-medium">{avgRating}</h4>
            </Link>
        </div>
    )
}

export default Card