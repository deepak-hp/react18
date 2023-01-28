import { IMG_BASE_URL } from "../../constants";

const Card = ({ restaurant, ...rest }) => {
    const { name, cuisines, avgRating, cloudinaryImageId } = restaurant;
    const imgURL = `${IMG_BASE_URL}${cloudinaryImageId}`
    return (
        <div className='cardContainer' {...rest}>
            <img className="cardImage" src={imgURL} alt="" width="60px" height="40px" />
            <h2>{name}</h2>
            <h3>{cuisines.join(",")}</h3>
            <h4>{avgRating}</h4>
        </div>
    )
}

export default Card