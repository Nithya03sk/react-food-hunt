import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const RestaurantMenu = (resId) => {
    const [restInfo, setRestInfo] = useState(null);

    useEffect(() => {
        fetchMenu()
    }, []);

    const fetchMenu = async () =>{
        const data = await fetch(MENU_API+resId+"&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        setRestInfo(json.data);
    }

  return restInfo
};

export default RestaurantMenu;