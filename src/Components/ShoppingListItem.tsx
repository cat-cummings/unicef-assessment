import { useDispatch } from "react-redux"
import { addToCart } from "../Actions"

type ItemProps = {
    item: {
        name: string,
        price: number
    }
}

function ShoppingListItem(props: ItemProps) {
    const { name, price } = props.item
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(addToCart(name, price))
    }
    return (
        <div className='item'>
            <p className='name'>{name}</p>
            <p className='price'>${price}</p>
            <span>
                <a className='cart-link' onClick={handleClick}>Add to cart</a>
            </span>
        </div>
    )
}

export default ShoppingListItem