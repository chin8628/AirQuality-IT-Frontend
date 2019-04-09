import React, { useState, useEffect } from 'react'
import firebase from '../../firebase'
import SensorCard from '../SensorCard'

const SensorCardList = () => {
  const [devices, setDevices] = useState({})
  const [deviceIds, setDeviceIds] = useState([])

  useEffect(() => {
    const getDeviceIds = async () => {
      const snapshot = await firebase
        .database()
        .ref('/')
        .once('value')

      console.log(snapshot.val())
    }

    getDeviceIds()

    // deviceIds.map((deviceId) => {
    //   const aqiLogRef = firebase.database().ref(`/${deviceId}`)

    //   aqiLogRef.on('value', (snapshot) => {
    //     const value = snapshot.val()

    //     if (Object.keys(value).length === 3) {
    //       console.log(snapshot.val())
    //       setDevices(snapshot.val())
    //     }
    //   })
    // })
  }, devices)

  console.log(deviceIds)

  const deviceNames = Object.keys(devices)
  const devicesArr = deviceNames.map(deviceName => devices[deviceName])

  return devicesArr
    .filter(device => device['aqi-log'])
    .map(device => (
      <SensorCard
        location={device.location}
        aqiLogs={device['aqi-log']}
        key={devicesArr.indexOf(device)}
      />
    ))
}

export default SensorCardList
