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

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch