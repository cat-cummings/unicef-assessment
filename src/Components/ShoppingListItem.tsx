import React from "react";

type ItemProps = {
    item: {
        name: string,
        price: number
    }
}

function ShoppingListItem(props: ItemProps) {
    const { name, price } = props.item
    return (
        <div className='item'>
            <p className='name'>{name}</p>
            <p className='price'>${price}</p>
        </div>
    )
}

export default ShoppingListItem