import { REQUEST, RECEIVE, ERROR } from './action'

const defaultState = {
  isLoading: true,
  isFailed: false,
  devices: [],
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case RECEIVE:
      return {
        ...state,
        isLoading: false,
        devices: action.payload,
      }
    case ERROR:
    default:
      return {
        ...state,
        isFailed: true,
        isLoading: false,
      }
  }
}
