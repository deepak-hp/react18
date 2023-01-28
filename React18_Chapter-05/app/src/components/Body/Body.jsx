import { restaurantList } from "../../constants"
import Card from "../Card";
const Body = () => {
    return (
        <div className='section'>

            <div className="listContainer">
                {restaurantList.map((restaurant) => (
                    <Card key={restaurant?.data?.id} restaurant={restaurant?.data} />
                ))}
            </div>
        </div>
    );
};

export default Body;