import { useState } from 'react';
import ApexCharts from 'apexcharts';
import './Chart.css';

const colorPrimary = "#13ae94",
      colorDefault = "#e1e4f2";

const defaultOptions = {
  chart: {
    toolbar: { show: false, },
    animations: {
      speed: 750,
      dynamicAnimation: {
        enabled: true,
        speed: 350,
      },
    },
  },
  dataLabels: { enabled: false, },
  legend: { show: false, },
  fill: {
    type: "gradient",
    gradient: {
      shade: "light",
      type: "vertical",
      opacityFrom: 0.4,
      opacityTo: 0,
      shadeIntensity: 0.2,
    }
  }
};

const Chart = () => {
  return (
    <div>

    </div>
  )
}

export default Chart;
