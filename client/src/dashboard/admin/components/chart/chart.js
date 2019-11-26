import React, { Component } from 'react'
import Chart from 'react-apexcharts'

export default class BuildingChart extends Component {
    
constructor(props){
    super(props);
    this.state = {
        options:{
          chart: {
            height: 350,
            type: 'scatter',
            zoom: {
              type: 'xy'
            }
          },
          dataLabels: {
            enabled: false
          },
          grid: {
            xaxis: {
              showLines: true
            },
            yaxis: {
              showLines: true
            },
          },
          xaxis: {
            type: 'datetime',
          },

        },
        series: [{
          name: 'TEAM 1',
          data: this.generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 60
          })
        },
        {
          name: 'TEAM 2',
          data: this.generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 60
          })
        },
        {
          name: 'TEAM 3',
          data: this.generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 30, {
            min: 10,
            max: 60
          })
        },
        {
          name: 'TEAM 4',
          data: this.generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 10, {
            min: 10,
            max: 60
          })
        },
        {
          name: 'TEAM 5',
          data: this.generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 30, {
            min: 10,
            max: 60
          })
        },
      ]
    }
  }

    
 generateDayWiseTimeSeries(baseval, count, yrange) {
  var i = 0;
  var series = [];
  while (i < count) {
    var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push([baseval, y]);
    baseval += 86400000;
    i++;
  }
  return series;
}

  render(){
    return(
      <Chart options={this.state.options}
      series={this.state.series}
      type="scatter"
      height={this.props.height}
      width='100%'> 
      </Chart>
    )
  }
}
