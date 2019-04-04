import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Line } from "react-chartjs-2";

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
`;

const Pollutant = styled.div`
  text-align: center;
  color: #b7b7b7;
`;

const Number = styled.div`
  font-size: 6em;
  font-weight: bold;
  color: #202020;
  text-align: center;
  text-shadow: 0 0.1em 0.35em rgba(0, 0, 0, 0.12);
  margin-bottom: 0.06em;
`;

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
`;

const MetaWraper = styled.div`
  text-align: center;
  margin-bottom: 2em;

  span {
    display: block;
    margin-bottom: 0.5em;
    color: #898989;
  }
`;

const data = canvas => {
  const ctx = canvas.getContext("2d");
  const gradientFill = ctx.createLinearGradient(0, 0, 0, 150);
  gradientFill.addColorStop(0, "#15D1FA");
  gradientFill.addColorStop(1, "rgba(21, 209, 250, 0)");

  return {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "PM 2.5",
        backgroundColor: gradientFill,
        borderColor: "#0FAACC",
        data: [12, 19, 3, 5, 2, 3]
      }
    ]
  };
};

const options = {
  responsive: true,
  title: {
    display: false
  },
  hover: {
    mode: "nearest",
    intersect: true
  },
  scales: {
    xAxes: [
      {
        display: false,
        scaleLabel: {
          display: true,
          labelString: "Month"
        }
      }
    ],
    yAxes: [
      {
        display: false,
        scaleLabel: {
          display: true,
          labelString: "Value"
        }
      }
    ]
  },
  legend: { display: false },
  layout: {
    padding: {
      left: 0,
      right: 0,
      top: 4,
      bottom: 0
    }
  }
};

const SensorCard = props => (
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
          IT Cafeteria
        </span>
        <span>
          <img src="/static/img/ic-clock.svg" alt="clock icon" />
          17:18
        </span>
      </MetaWraper>
      <Line data={data} option={option} />
    </Card>
  </>
);

SensorCard.propTypes = {};

export default SensorCard;
