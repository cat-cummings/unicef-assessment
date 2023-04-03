export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const REMOVE_ONE = 'REMOVE_ONE'

export const addToCart = (name: string, price: number) => {
    return {
        type: ADD_TO_CART,
        name: name,
        price: price
    }
}

export const removeFromCart = (name: string) => {
    return {
        type: REMOVE_FROM_CART,
        name: name
    }
}

export const removeOneItem = (name: string) => {
    return {
        type: REMOVE_ONE,
        name: name
    }
}