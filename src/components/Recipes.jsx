import { useEffect } from "react";
import { useState } from "react";
import Cart from "./Cart";

const Recipes = ({hadelRecipeItem}) => {
    const [item, setItem] = useState([])
    useEffect(() => {
        fetch('main.json')
        .then(res => res.json())
        .then(data => setItem(data))
    }, [])
    return (
        <div className="w-2/3">
            <h1>Data {item.length}</h1>
            <div className="grid md:grid-cols-2 gap-5">
            {
                item.map((cart, index) => <Cart 
                key={index} 
                cart={cart}
                hadelRecipeItem={hadelRecipeItem}
                />)
            }
            </div>
        </div>
    );
};

export default Recipes;