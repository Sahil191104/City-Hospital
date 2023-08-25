import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import {rootReducer} from './redux'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './Saga/rootSaga'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['medicine', 'cart', 'auth', 'fav']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const sagaMiddleware = createSagaMiddleware()

const allMiddleware = [thunk, sagaMiddleware]

export const configstore = () => {
    let store  = createStore(persistedReducer, applyMiddleware(...allMiddleware));

    sagaMiddleware.run(rootSaga)

    return store
}

export let store = configstore()
export let persistor = persistStore(store)