export const ADD_TO_CART = 'ADD_TO_CART'

export const addToCart = (name: string, price: number) => {
    return {
        type: ADD_TO_CART,
        name: name,
        price: price
    }
}

