import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

import aqiReducer from './aqi/reducer'

const combinedReducer = combineReducers({
  aqiReducer,
})

export default function initializeStore(initialState = {}) {
  return createStore(
    combinedReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware)),
  )
}
