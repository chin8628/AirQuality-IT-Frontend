import { REQUEST, RECEIVE, ERROR } from './action'

const defaultState = {
  isLoading: true,
  isFailed: false,
  aqiList: [],
  lastestAqi: {
    pm25: 0,
    pm100: 0,
    pm10: 0,
    created_at: '',
    device_id: 0,
  },
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case REQUEST:
      return {
        ...state,
      }
    case RECEIVE:
      return {
        ...state,
        isLoading: false,
        lastestAqi: action.payload,
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
