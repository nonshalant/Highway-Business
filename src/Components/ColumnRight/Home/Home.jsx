import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './home.css'

const Home = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);


  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
  
    // Destroy existing chart instance if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
  
    // Create a new chart instance
    chartInstance.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
          {
            label: 'Sales',
            data: [1200, 1250, 1300, 1400, 1600],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
    });
  }, []);
  

  return (
    <div className='home'>

      <div className="home-container">

        <div className="top-section">
          <img src="" alt="location-icon" />
          <p>119-56 Farmers Blvd, Saint Albans NY</p>
        </div>

        <div className="bottom-section">
            <div className="chart">
                <canvas ref={chartRef} />
            </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
