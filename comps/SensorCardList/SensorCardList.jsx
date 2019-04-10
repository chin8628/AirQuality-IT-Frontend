import React, { useState, useEffect } from 'react'
import firebase from '../../firebase'
import SensorCard from '../SensorCard'

const SensorCardList = () => {
  const [devices, setDevices] = useState({})

  useEffect(() => {
    firebase
      .database()
      .ref('/')
      .once('value')
      .then(data => setDevices(data.val()))
  }, devices)

  const deviceIds = Object.keys(devices)
  return deviceIds
    .filter(deviceId => devices[deviceId]['aqi-log'])
    .map(deviceId => (
      <SensorCard key={deviceId} deviceId={deviceId} location={devices[deviceId].location} />
    ))
}

export default SensorCardList
