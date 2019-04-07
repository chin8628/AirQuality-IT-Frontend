export const REQUEST = 'aqi/REQUEST'
export const RECEIVE = 'aqi/RECEIVE'
export const ERROR = 'aqi/ERROR'

export const requestAQILog = () => ({ type: REQUEST })
export const receiveAQILog = data => ({ type: RECEIVE, payload: data })
export const handleError = err => ({ type: ERROR, error: err })
// export const getAQILog = lastHour => dispatch => get
