import api from '../../lib/api'

export const REQUEST = 'device/REQUEST'
export const RECEIVE = 'device/RECEIVE'
export const ERROR = 'device/ERROR'

export const requestDevices = () => ({ type: REQUEST })
export const receiveDevices = data => ({ type: RECEIVE, payload: data })
export const handleError = err => ({ type: ERROR, error: err })
export const getDevices = () => (dispatch) => {
  dispatch(requestDevices())

  api
    .get('/devices')
    .then((res) => {
      dispatch(receiveDevices(res.data))
    })
    .catch(err => dispatch(handleError(err)))
}
