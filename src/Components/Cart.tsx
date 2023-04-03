import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { removeFromCart } from "../Actions";

function Cart() {
    const cart = useSelector((globalState: RootState) => globalState.cart)
    const dispatch = useDispatch()

    const pricesArray: number[] = cart.map((item) => item.price * item.quantity)
    const overallTotal: number = pricesArray.flat().reduce((acc, sum) => acc + sum)

    const remove = (name: string) => {
        dispatch(removeFromCart(name))
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
                                <input className='update-input' value={quantity}/>
                            </td>
                            <td>
                                price: ${price * quantity}
                            </td>
                            <td>
                                <span onClick={() => remove(name)}>delete</span>
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