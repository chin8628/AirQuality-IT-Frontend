import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import AqiLabel from '../comps/AqiLabel'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-height: 360px;
`

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding-top: 2em;
  margin-bottom: -2em;
`

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

const device = () => {
  useEffect(() => {
    api.get(`/aqi_logs/${deviceId}/lastest`).then((res) => {
      const { data } = res

      const createdAt = new Date(data.created_at)
      const dateStr = `${createdAt.getDate()}/${createdAt.getMonth()}/${createdAt.getFullYear()}`
      const minuteStr = `0${createdAt.getMinutes()}`.slice(-2)
      const timeStr = `${createdAt.getHours()}:${minuteStr}`
      const createdAtStr = `${dateStr} ${timeStr}`

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

  return (
    <div>
      <Container>
        <Content>
          <Card>Hello</Card>
        </Content>
      </Container>
    </div>
  )
}

export default device
