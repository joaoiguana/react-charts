import { useState } from 'react';
import ApexChart from 'react-apexcharts';
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
  },
};

const daily = [
  { data: [35, 55, 41, 74, 30, 58], },
];

const weekly = [
  { data: [55, 41, 74, 30, 58], },
];

const buttons = ["Daily", "Weekly"];

const ToggleButtons = ({
  setSeries,
  setActiveButton,
  activeButton
}) => {
  const handleClick = stat => {
    setSeries(stat === "Daily" ? daily : weekly);
    setActiveButton(stat);
  };

  return (
    <nav>
      {buttons.map(button => (
        <button
          key={button}
          className={button === activeButton
            ? "active"
            : ""
          }
          onClick={() => handleClick(button)}
        >{button}</button>
      ))}
    </nav>
  );
};

const Chart = () => {
  const [series, setSeries] = useState(daily);
  const [activeButton, setActiveButton] = useState("Daily");

  return (
    <div className='card'>
      <header>
        <h2>Revenue</h2>
        <ToggleButtons
          setSeries={setSeries}
          setActiveButton={setActiveButton}
          activeButton={activeButton}
        />
      </header>
      <div className='chart'>
        <ApexChart
          options={options}
          series={series}
          type="area"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default Chart;
