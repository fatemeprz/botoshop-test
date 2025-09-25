import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/product/productsSlice"
import cartReducer from "../features/cart/cartSlice"
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import { persistReducer } from "redux-persist";
import persistStore from "redux-persist/lib/persistStore";
import { FLUSH,REGISTER,REHYDRATE,PAUSE,PERSIST,PURGE } from "redux-persist";

const persistConfig={
    key:"cart",
    storage,
    blacklist:["loading"]
}

const persistCartReducer=persistReducer(persistConfig,cartReducer)

const store=configureStore({
    reducer:{products:productsReducer,cart:persistCartReducer},
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
        serializableCheck:{ignoreActions:[REGISTER,PERSIST,PAUSE,PURGE,FLUSH,REHYDRATE]}
    }).concat(logger)
})

const persistor=persistStore(store)

export {store,persistor}