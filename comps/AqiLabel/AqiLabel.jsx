import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

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

const AqiLabel = ({ pm }) => {
  let warningLabel = 'n/a'
  let colorTag = 'na'

  if (pm < 26) {
    warningLabel = 'Healthy'
    colorTag = 'healthy'
  } else if (pm < 38) {
    warningLabel = 'Moderate'
    colorTag = 'moderate'
  } else if (pm < 51) {
    warningLabel = 'Unhealthy for sensitive'
    colorTag = 'sensitive'
  } else if (pm < 91) {
    warningLabel = 'Unhealthy'
    colorTag = 'unhealthy'
  } else {
    warningLabel = 'Hazardous'
    colorTag = 'harzardous'
  }

  return (
    <AqiWrapper>
      <span className={`aqi aqi-${colorTag}`}>{warningLabel}</span>
    </AqiWrapper>
  )
}

AqiLabel.propTypes = {
  pm: PropTypes.number.isRequired,
}

export default AqiLabel
