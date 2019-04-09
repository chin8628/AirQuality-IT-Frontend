import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
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
  span.aqi.aqi-good {
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

const SensorCard = ({ location }) => (
  <>
    <Card>
      <Pollutant>
        PM 2.5 (µg/m<sup>3</sup>)
      </Pollutant>
      <Number>16</Number>
      <AqiWrapper>
        <span className="aqi aqi-good">Healthy</span>
      </AqiWrapper>
      <MetaWraper>
        <span>
          <img src="/static/img/ic-location.svg" alt="location icon" />
          {location}
        </span>
        <span>
          <img src="/static/img/ic-clock.svg" alt="clock icon" />
          17:18
        </span>
      </MetaWraper>
      <Chart values={[0, 0, 0, 0, 0, 0]} />
    </Card>
  </>
)

SensorCard.propTypes = {
  location: PropTypes.string.isRequired,
}

export default SensorCard
