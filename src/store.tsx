import {configureStore} from '@reduxjs/toolkit'
import cart from './Reducers/cart'

const store = configureStore({
    reducer: {
        cart
    },
    devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  })
})

export default store