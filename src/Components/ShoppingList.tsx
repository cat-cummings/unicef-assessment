import React from "react";
import data from '../data.json'
import ShoppingListItem from "./ShoppingListItem";

function ShoppingList() {
    return(
        <div className='container'>
            {data.map((item) => {
                return <ShoppingListItem item={item}/>
            })}
        </div>
    )
}

export default ShoppingList