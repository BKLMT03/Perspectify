import {React, useState, useEffec} from 'react'
import { Doughnut } from '@reactchartjs/react-chart.js'

const DonutChart = () => {
const data = {
  labels: ['Very-Left','Left','Center','Right', 'Very-Right'],
  datasets: [
    {
      label: '# of Articles',
      data: [10, 10, 10, 10, 10 ],
      backgroundColor: [
        'rgba(117, 12, 155, 0.75)',
        'rgba(255, 153, 204, 0.75)',
        'rgba(128, 128, 128, .75)',
        'rgba(0, 102, 0, 0.75)',
        'rgba(220, 238, 61, 0.75)'
      ],
      borderColor: [
        'rgba(100, 7, 134, 1)',
        'rgba(255, 102, 178, 1)',
        'rgba(96, 96, 96, 1)',
        'rgba(10, 81, 17, 1)',
        'rgba(211, 230, 33, 1)'
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