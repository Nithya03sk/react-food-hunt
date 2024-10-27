import ShimmerUi from "./ShimmerUi";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu"

const RestaurantMenu = () => {
    const {resId} = useParams();
    const restInfo = useRestaurantMenu(resId); //this is custom hook (a function which takes input and gives output, fetching API is done here in this custom hook)
    
    const {name, cuisines, costForTwoMessage} = restInfo?.cards[2]?.card?.card?.info || {};
    const {itemCards} = restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || {};

    return ( 
        restInfo === null ? <ShimmerUi /> :
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines?.join(' ,')}</p>
            <p>{costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards?.map(
                    (item) => {
                        return <li key={item.card.info.id}>
                            {item.card.info.name + " Rs. " + item.card.info.defaultPrice / 100}
                            </li>})}
            </ul>
        </div>
    )
}
export default RestaurantMenu;