import { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { addToCart, removeFromCart, removeOneItem } from "../Actions";

function Cart() {
    const cart = useSelector((globalState: RootState) => globalState.cart)
    const dispatch = useDispatch()
    const [changes, setChanges] = useState({})

    const pricesArray: number[] = cart.map((item) => item.price * item.quantity)
    const overallTotal: number = pricesArray.flat().reduce((acc, sum) => acc + sum)

    const remove = (name: string) => {
        dispatch(removeFromCart(name))
    }
    const handlePlus = (name: string, price: number) => {
        dispatch(addToCart(name, price))
    }
    const handleMinus = (name: string) => {
        dispatch(removeOneItem(name))
    }
    
    return(
        <div className='cart'>
            <h1>Here are your shopping cart items</h1>
            <table>
                <thead>
                    <tr>
                        <td>Item</td>
                        <td>Quantity</td>
                        <td>Remove</td>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(({ name, price, quantity }) => {
                        return (
                            <tr>
                            <td>{name}</td>
                            <td>
                                {/* <input className='update-input' onChange={(e) => handleType(quantity, e)} value={quantity as keyof typeof changes || quantity}/> */}
                                {quantity}
                            </td>
                            <td>
                                price: ${price * quantity}
                            </td>
                            <td>
                                <button onClick={() => remove(name)}>delete</button>
                            </td>
                            <td>
                                <button onClick={() => handlePlus(name, price)}>+</button>
                            </td>
                            <td>
                                <button onClick={() => handleMinus(name)}>-</button>
                            </td>
                            </tr>
                        )
                    })}
                    <p>Total: ${overallTotal.toFixed(2)}</p>
                </tbody>
            </table>
        </div>
    )
}

export default Cart