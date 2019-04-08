import React, { useState, useEffect } from 'react'
import firebase from '../../firebase'
import SensorCard from '../SensorCard'

const SensorCardList = () => {
  const [devices, setDevices] = useState({})

  useEffect(() => {
    const aqiLogRef = firebase.database().ref('/')

    aqiLogRef.on('value', (snapshot) => {
      setDevices(snapshot.val())
    })
  }, devices)

  const deviceNames = Object.keys(devices)
  const devicesArr = deviceNames.map(deviceName => devices[deviceName])

  return devicesArr.map(device => <SensorCard location={device.location} />)
}

export default SensorCardList
