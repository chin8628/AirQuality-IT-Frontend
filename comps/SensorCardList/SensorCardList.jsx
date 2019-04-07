import React, { useState } from 'react'
import firebase from '../../firebase'
import SensorCard from '../SensorCard'

const SensorCardList = () => {
  let devices = {}
  const aqiLogRef = firebase.database().ref('/')
  aqiLogRef.on('value', (snapshot) => {
    devices = snapshot.val()
  })

  const deviceNames = Object.keys(devices)
  const devicesArr = deviceNames.map(deviceName => devices[deviceName])

  console.log(deviceNames)

  return devicesArr.map(() => <SensorCard />)
}

export default SensorCardList
