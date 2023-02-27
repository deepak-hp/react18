import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { IMG_BASE_URL } from "../../constants"
import useOnline from '../../utils/useOnline';
import Shimmer from '../Shimmer';
import useRestaurantMenu from './useRestaurantMenu';

const RestaurantMenu = () => {
    const { resId } = useParams();
    const restaurantInfo = useRestaurantMenu(resId);
    const isOnline = useOnline();

    if (!isOnline) {
        return <h1>Offline, please check your internet connection</h1>
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