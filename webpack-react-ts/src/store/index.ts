import { Store, createStore, applyMiddleware, StoreEnhancer, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import promise from 'redux-promise'
import { countReducer } from './reducer/count'

const storeEnhancer: StoreEnhancer = applyMiddleware(promise, thunk, logger)

// const 

const reducers = combineReducers({ count: countReducer })
const createStoreMiddle = storeEnhancer(createStore)
const store = createStoreMiddle(reducers)

export default store