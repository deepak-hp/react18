import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { IMG_BASE_URL } from "../../constants"
import Shimmer from '../Shimmer';

const RestaurantMenu = () => {
    const { resId } = useParams();
    const [restaurantInfo, setRestaurantInfo] = useState(null);
    console.log(resId);

    useEffect(() => {
        getRestaurantInfo();
    }, [])

    const getRestaurantInfo = async () => {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/v4/full?lat=13.9299299&lng=75.568101&menuId=${resId}`)
        const json = await data.json();
        setRestaurantInfo(json.data);
    }

    if (!restaurantInfo) return <Shimmer />

    return (
        <div style={{ display: "flex", gap: "128px", paddingInline: "128px", paddingBlock: "64px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <h1>Restaurant id: {resId}</h1>
                <h1>{restaurantInfo?.name}</h1>
                <img src={IMG_BASE_URL + restaurantInfo?.cloudinaryImageId} alt={`image_${restaurantInfo?.name}`} />
                <h1>{restaurantInfo?.area}</h1>
                <h1>{restaurantInfo?.city}</h1>
                <h1>{restaurantInfo?.avgRatingString}</h1>
                <h1>{restaurantInfo?.costForTwoMessage}</h1>
            </div>
            <div>
                <h2>Menu</h2>
                {
                    Object.values(restaurantInfo?.menu?.items).map(item => (
                        <li key={item.id}>{item.name}</li>
                    ))
                }
            </div>
        </div>
    )
}

export default RestaurantMenu