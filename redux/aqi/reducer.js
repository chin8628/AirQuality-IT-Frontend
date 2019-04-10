import { REQUEST, RECEIVE, ERROR } from './action'

const defaultState = {
  isFetching: true,
  isFailed: false,
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case RECEIVE:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
      }
    case ERROR:
    default:
      return {
        ...state,
        isFailed: true,
        isFetching: false,
      }
  }
}
