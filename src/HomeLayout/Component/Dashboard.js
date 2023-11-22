import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import GaugeChart from './Chart'

Chart.register(...registerables);

const LineChartWithAPI = () => {
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = { method: 'GET', headers: { accept: 'application/json' } };
        const response = await fetch('https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0', options); // Replace 'YOUR_API_ENDPOINT' with your API URL
        const data = await response.json();

        const processedData = processDataForChart(data);
        setChartData(processedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const processDataForChart = (apiData) => {
    const labels = apiData.dataseries.map(item => item.timepoint); // Assuming 'timepoint' as x-axis labels
    const datasets = [{
      label: 'Temperature',
      data: apiData.dataseries.map(item => item.temp2m), // Assuming 'temp2m' as y-axis data
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderWidth: 2,
    }];

    return { labels, datasets };
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className='chart'>
      <div className='line-chart'>
        <Line data={chartData} options={options} />
      </div>
      <div className='gaugh-container'> 

        <GaugeChart />
      </div>
    </div>
  );
};

export default LineChartWithAPI;
