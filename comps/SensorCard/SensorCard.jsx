import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import * as _ from 'lodash'
import Chart from './Chart'
import firebase from '../../firebase'

const Card = styled.div`
  background: #ffffff;
  box-shadow: 0px 7px 28px rgba(0, 0, 0, 0.12);
  border-radius: 6px;
  width: 95%;
  max-width: 300px;
  padding-top: 1.5em;
  margin-left: 1em;
  margin-right: 1em;
  margin-bottom: 2em;
`

const Pollutant = styled.div`
  text-align: center;
  color: #b7b7b7;
`

const Number = styled.div`
  font-size: 6em;
  font-weight: bold;
  color: #202020;
  text-align: center;
  text-shadow: 0 0.1em 0.35em rgba(0, 0, 0, 0.12);
  margin-bottom: 0.06em;
`

const AqiWrapper = styled.div`
  text-align: center;

  span {
    display: inline-block;
    padding: 0.3em 0.5em;
    margin-bottom: 1em;
    background-color: #000;
    color: #fff;
    font-weight: bold;
  }

  /* Colours for AQI levels */
  span.aqi.aqi-healthy {
    background-color: var(--color-aqi-good);
  }

  span.aqi.aqi-moderate {
    background-color: var(--color-aqi-moderate);
    color: #000;
  }

  span.aqi.aqi-sensitive {
    background-color: var(--color-aqi-sensitive);
  }

  span.aqi.aqi-unhealthy {
    background-color: var(--color-aqi-unhealthy);
  }

  span.aqi.aqi-very-unhealthy {
    background-color: var(--color-aqi-very-unhealthy);
  }

  span.aqi.aqi-harzardous {
    background-color: var(--color-aqi-harzardous);
  }
`

const MetaWraper = styled.div`
  text-align: center;
  margin-bottom: 2em;

  span {
    display: block;
    margin-bottom: 0.5em;
    color: #898989;
  }

  img {
    width: 1em;
    height: 1em;
    position: relative;
    top: 0.12em;
  }
`

const SensorCard = ({ deviceId, location }) => {
  const [aqiLogs, setAqiLogs] = useState({ 0: { pm100: 0, pm25: 0, pm10: 0 } })
  const [currentTime, setCurrentTime] = useState('00:00')
  const [warning, setWarning] = useState('Healthy')
  const [colorTag, setColorTag] = useState('healthy')
  const [chartData, setChartData] = useState({ values: [], labels: [] })

  useEffect(() => {
    firebase
      .database()
      .ref(`/${deviceId}/aqi-log`)
      .orderByKey()
      .on('value', (data) => {
        const keys = Object.keys(data.val())
        const latestVal = data.val()[keys[keys.length - 1]]

        if (latestVal !== undefined && Object.keys(latestVal).length === 3) {
          const groupedKeys = _.groupBy(keys, (x) => {
            const date = new Date(parseInt(x, 10) * 1000)
            return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:00`
          })

          const labels = Object.keys(groupedKeys).slice(9)
          const hourPm25 = labels.map((label) => {
            const timestamps = _.sampleSize(groupedKeys[label], 6)
            const numbers = timestamps.map(timestamp => data.val()[timestamp].pm25)

            return _.round(_.mean(numbers), 2)
          })

          setChartData({ values: hourPm25, labels })
          setAqiLogs(data.val())

          const time = new Date(keys[keys.length - 1] * 1000)
          setCurrentTime(`${time.getHours()}:${time.getMinutes()}`)

          if (latestVal.pm25 < 26) {
            setWarning('Healthy')
            setColorTag('healthy')
          } else if (latestVal.pm25 < 38) {
            setWarning('Moderate')
            setColorTag('moderate')
          } else if (latestVal.pm25 < 51) {
            setWarning('Unhealthy for sensitive')
            setColorTag('sensitive')
          } else if (latestVal.pm25 < 91) {
            setWarning('Unhealthy')
            setColorTag('unhealthy')
          } else {
            setWarning('Hazardous')
            setColorTag('harzardous')
          }
        }
      })
  }, [])

  const keys = Object.keys(aqiLogs)
  const lastestAQI = aqiLogs[keys[keys.length - 1]]

  return (
    <>
      <Card>
        <Pollutant>
          PM 2.5 (µg/m<sup>3</sup>)
        </Pollutant>
        <Number>{lastestAQI.pm25}</Number>
        <AqiWrapper>
          <span className={`aqi aqi-${colorTag}`}>{warning}</span>
        </AqiWrapper>
        <MetaWraper>
          <span>
            <img src="/static/img/ic-location.svg" alt="location icon" />
            {location}
          </span>
          <span>
            <img src="/static/img/ic-clock.svg" alt="clock icon" />
            {currentTime}
          </span>
        </MetaWraper>
        <Chart {...chartData} />
      </Card>
    </>
  )
}

SensorCard.propTypes = {
  deviceId: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
}

export default SensorCard
