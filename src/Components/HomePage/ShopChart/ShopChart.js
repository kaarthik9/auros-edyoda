import React from 'react'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'

const options = {
  title: {
    text: 'Engagement Overtime, 2014-2021'
  },

  subtitle: {
    text: 'Source: Auros.org'
  },

  xAxis: {
    accessibility: {
      rangeDescription: 'Range: 2016 to 2021'
    },
    allowDecimals: false
  },

  rangeSelector : {
    selected : 0,
    inputEnabled: false
    
  },

  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle'
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false
      },
      pointStart: 2014
    }
  },

  series: [{
    name: 'Sales',
    data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
  }, {
    name: 'Reviews',
    data: [24916, 24064, 29742, 50000, 70055, 90282, 88121, 109434]
  }, {
    name: 'Returns',
    data: [11744, 8000, 16005, 10000, 12000, 13000, 19000, 10000]
  }
],

  responsive: {
    rules: [{
      condition: {
        maxWidth: 500
      },
      chartOptions: {
        legend: {
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'bottom'
        }
      }
    }]
  }

}

export default function ShopChart() {
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
    />
  )

} 
