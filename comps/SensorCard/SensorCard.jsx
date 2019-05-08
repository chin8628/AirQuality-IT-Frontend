import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import * as _ from 'lodash'
import Chart from './Chart'
import api from '../../lib/api'
import AqiLabel from '../AqiLabel'

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
  const [isLastestAqiLoading, setIsLastestAqiLoading] = useState(true)

  const [lastestAqi, setLastestAqi] = useState({
    pm25: 0,
    pm100: 0,
    pm10: 0,
    created_at: 'n/a',
    device_id: 0,
  })
  const [isAqiLogsLoading, setisAqiLogsLoading] = useState(true)
  const [chartValue, setChartValue] = useState({
    values: [],
    labels: [],
  })

  useEffect(() => {
    api.get(`/aqi_logs/${deviceId}/lastest`).then((res) => {
      const { data } = res

      const createdAt = new Date(data.created_at)
      const createdAtStr = `${createdAt.getDate()}/${createdAt.getMonth()}/${createdAt.getFullYear()} ${createdAt.getHours()}:${`0${createdAt.getMinutes()}`.slice(
        -2,
      )}`
      setLastestAqi({
        ...data,
        created_at: createdAtStr,
      })

      setIsLastestAqiLoading(false)
    })

    api.get(`/aqi_logs/${deviceId}/24`).then((res) => {
      const { data } = res

      const values = data.map(log => parseInt(log.avg_pm25, 10))
      const chartLabel = data.map((log) => {
        const date = new Date(log.created_at_trunced_hour)
        return `${date.getHours()}:${`0${date.getMinutes()}`.slice(-2)}`
      })

      setChartValue({ values, labels: chartLabel })
      setisAqiLogsLoading(false)
    })
  }, [])

  // If the api cannot found any aqi log, then don't render the card
  if (lastestAqi.pm25 === null && lastestAqi.pm100 === null && lastestAqi.pm10 === null) {
    return null
  }

  if (isAqiLogsLoading && isLastestAqiLoading) {
    return 'Loading...'
  }

  return (
    <>
      <Card>
        <Pollutant>
          PM 2.5 (µg/m<sup>3</sup>)
        </Pollutant>
        <Number>{lastestAqi.pm25}</Number>
        <AqiLabel pm={lastestAqi.pm25} />
        <MetaWraper>
          <span>
            <img src="/static/img/ic-location.svg" alt="location icon" />
            {location}
          </span>
          <span>
            <img src="/static/img/ic-clock.svg" alt="clock icon" />
            {lastestAqi.created_at}
          </span>
        </MetaWraper>
        <Chart {...chartValue} />
      </Card>
    </>
  )
}

SensorCard.propTypes = {
  deviceId: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
}

export default SensorCard
