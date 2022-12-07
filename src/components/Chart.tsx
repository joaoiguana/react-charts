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
    },
  },
};

var options = {
  ...defaultOptions,
  colors: [colorPrimary, colorDefault],
  grid: {
    borderColor: "rgba(255, 255, 255, 0.08)",
    padding: {
      left: -10, right: 0, top: -16, bottom: -8
    },
    xaxis: { lines: { show: false, }, },
    yaxis: { lines: { show: false, }, },
  },
  yaxis: { labels: { show: false, }, },
  xaxis: {
    labels: { show: false, },
    axisBorder: { show: false, },
    axisTicks: { show: false, },
    crosshairs: { show: false, },
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
  }
};

const Chart = () => {
  return (
    <div>

    </div>
  )
}

export default Chart;
