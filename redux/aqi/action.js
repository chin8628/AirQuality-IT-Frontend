import api from '../../lib/api'

export const REQUEST = 'aqi/REQUEST'
export const RECEIVE = 'aqi/RECEIVE'
export const ERROR = 'aqi/ERROR'

export const requestAqiLog = () => ({ type: REQUEST })
export const receiveAqiLog = data => ({ type: RECEIVE, payload: data })
export const requestLastestAqiLog = () => ({ type: REQUEST })
export const receiveLastestAqiLog = data => ({ type: RECEIVE, payload: data })
export const handleError = err => ({ type: ERROR, error: err })
export const getLastestAqiLog = deviceId => async (dispatch) => {
  dispatch(requestLastestAqiLog())

  api
    .get(`/aqi_logs/${deviceId}/lastest/`)
    .then(res => dispatch(receiveLastestAqiLog(res.data)))
    .catch(err => dispatch(handleError(err)))
}
