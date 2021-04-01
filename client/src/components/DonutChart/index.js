import {React, useState, useEffec} from 'react'
import { Doughnut } from '@reactchartjs/react-chart.js'

const DonutChart = () => {
  const data = {
    labels: ['Very Liberal', 'Skews Liberal', 'Centrist', 'Skews Conservative', 'Very Conservative'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 7, 4, 20],
        backgroundColor: [
          'pink',
          'yellow',
          'green',
          'orange',
          'purple'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }
  return (
    <div>
    <Doughnut data={data} width="300px" />
    </div>
  )
}

export default DonutChart