import {React, useState, useEffec} from 'react'
import { Doughnut } from '@reactchartjs/react-chart.js'

const DonutChart = () => {
  const data = {
    labels: ['Liberal', 'Conservative', 'Other'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
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