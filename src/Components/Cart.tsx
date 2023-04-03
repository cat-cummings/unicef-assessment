import { useSelector } from "react-redux";
import { RootState } from "../store";

function Cart() {
    const cart = useSelector((globalState: RootState) => globalState.cart)
    const pricesArray: number[] = cart.map((item) => item.price * item.quantity)
    const overallTotal: number = pricesArray.flat().reduce((acc, sum) => acc + sum)
    
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
                                delete
                            </td>
                            </tr>
                        )
                    })}
                    <p>Total: ${overallTotal}</p>
                </tbody>
            </table>
        </div>
    )
}

export default Cart