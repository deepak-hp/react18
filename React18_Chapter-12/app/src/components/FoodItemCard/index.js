import React from 'react'
import { IMG_BASE_URL } from '../../constants';
import { Link } from "react-router-dom"

const FoodItemCard = ({
    restaurant, ...rest
}) => {
    const { name, price, cloudinaryImageId, id } = restaurant;
    const imgURL = `${IMG_BASE_URL}${cloudinaryImageId}`
    return (
        <div className='cardContainer' {...rest}>
            <Link to={`/restaurants/${id}`} style={{ textDecoration: "none" }}>
                <img className="cardImage" src={imgURL} alt="" width="60px" height="40px" />
                <h2 className="font-bold text-xl">{name}</h2>
                <h4 className="font-medium">Price - {price}</h4>
            </Link>
        </div>
    )
}

export default FoodItemCard