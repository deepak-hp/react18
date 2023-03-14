import { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "../../constants";

const useRestaurantMenu = (resId) => {
    const [restaurantInfo, setRestaurantInfo] = useState(null);

    useEffect(() => {
        getRestaurantInfo();
    }, [])

    const getRestaurantInfo = async () => {
        const data = await fetch(FETCH_MENU_URL + resId)
        const json = await data.json();
        setRestaurantInfo(json.data);
    }

    return restaurantInfo;
}


export default useRestaurantMenu;