import React from 'react'
import PropTypes from 'prop-types'
import { Line } from 'react-chartjs-2'

const Chart = ({ values }) => {
  const data = (canvas) => {
    const ctx = canvas.getContext('2d')
    const gradientFill = ctx.createLinearGradient(0, 0, 0, 150)
    gradientFill.addColorStop(0, '#15D1FA')
    gradientFill.addColorStop(1, 'rgba(21, 209, 250, 0)')

    return {
      labels: [
        new Date('2019-04-04T01:00:00'),
        new Date('2019-04-04T02:00:00'),
        new Date('2019-04-04T03:00:00'),
        new Date('2019-04-04T04:00:00'),
        new Date('2019-04-04T05:00:00'),
        new Date('2019-04-04T06:00:00'),
      ],
      datasets: [
        {
          label: 'PM 2.5',
          backgroundColor: gradientFill,
          borderColor: '#0FAACC',
          data: values,
        },
      ],
    }
  }

  const options = {
    responsive: true,
    title: {
      display: false,
    },
    hover: {
      mode: 'nearest',
      intersect: true,
    },
    scales: {
      xAxes: [
        {
          display: false,
          scaleLabel: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          display: false,
          scaleLabel: {
            display: false,
          },
        },
      ],
    },
    legend: { display: false },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 4,
        bottom: 0,
      },
    },
  }

  return <Line data={data} options={options} />
}

Chart.propTypes = {
  values: PropTypes.arrayOf(PropTypes.number).isRequired,
}

export default Chart
