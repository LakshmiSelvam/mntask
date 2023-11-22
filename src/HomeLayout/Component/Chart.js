import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';

const GaugeChart = () => {
  const [gaugeData, setGaugeData] = useState([0]); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0'); // Replace with your actual API endpoint
        const result = await response.json();
        console.log(result)
        const latestValue = result.dataseries[0]?.temp2m || 0; 
        setGaugeData([latestValue]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 
console.log(gaugeData)
  const data = {
    labels: ['Temperature'],
    datasets: [
      {
        label: 'Gauge Chart',
        data: gaugeData,
        backgroundColor: ['#FF6384'],
        hoverOffset: 2,
      },
    ],
  };

  const options = {
    cutout: '80%',
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  return (
    <div className='gauge-chart'>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default GaugeChart;
