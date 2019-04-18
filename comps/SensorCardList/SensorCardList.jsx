import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getDevices } from '../../redux/device/action'

import SensorCard from '../SensorCard'

const SensorCardList = ({ dispatch, devices }) => {
  useEffect(() => {
    dispatch(getDevices())
  }, [])

  return devices.map(device => (
    <SensorCard key={device.device_id} deviceId={device.device_id} location={device.location} />
  ))
}

const mapStateToProps = state => ({
  devices: state.device.devices,
})

export default connect(mapStateToProps)(SensorCardList)
