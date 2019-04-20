import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

import aqi from './aqi/reducer'
import device from './device/reducer'

const combinedReducer = combineReducers({
  aqi,
  device,
})

export default function initializeStore(initialState = {}) {
  return createStore(
    combinedReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware)),
  )
}
