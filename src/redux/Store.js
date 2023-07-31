import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import {rootReducer} from './redux'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['medicine', 'cart']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const configstore = () => {
    let store  = createStore(persistedReducer, applyMiddleware(thunk));
    let persistor = persistStore(store)

    return { store, persistor }
}