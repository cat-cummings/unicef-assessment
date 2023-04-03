import { ADD_TO_CART, REMOVE_FROM_CART } from "../Actions";

const initialCartState: Array<any> = []

const reducer = (state = initialCartState, action: any) => {
    const newItem = { name: action.name, price: action.price, quantity: 1 }

    switch(action.type) {
        case ADD_TO_CART: {
            let index = state.findIndex((item) => {
                return item.name === action.name
            })
            index === -1 ? (state = [...state, newItem]) : (state = state.map((item) => {
                if (item.name === action.name) {
                    item.quantity += 1
                }
                return item
            }))
            return state
        }
        

        case REMOVE_FROM_CART: {
            return state.filter((item) => item.name !== action.name)
        }


        default:
            return state
    }
}

export default reducer