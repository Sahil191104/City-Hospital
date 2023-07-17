import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { routerReducer } from './redux';

export const configstore = () => {
    let store = createStore(routerReducer, applyMiddleware(thunk));

    return store;
}