import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

const VictoryBarChart = () => {
  const data = [
    { month: 'January', sales: 65, color: '#FF543E47', borderColor: '#FF543E' },
    { month: 'February', sales: 59, color: '#1E99CC21', borderColor: '#1E99CC' },
    { month: 'March', sales: 40, color: '#2EC6A338', borderColor: '#2EC6A3' },
    { month: 'April', sales: 81, color: '#6B038530', borderColor: '#6B0385' },
    { month: 'May', sales: 56, color: '#FFDE5557', borderColor: '#FFDE55' },
  ];

  return (

    
    <VictoryChart
      theme={VictoryTheme.material}
      domainPadding={20}
      width={600}
      height={400}
      padding={{ top: 50, bottom: 80, left: 80, right: 50 }}
    >

      <VictoryAxis
        tickValues={data.map((item) => item.month)}
        tickFormat={(x) => `${x}`}
        style={{
          tickLabels: {
            angle: 0, 
            fontSize: 10,
            padding: 5,
          },
          grid: {
            stroke: 'rgba(0, 0, 0, 0.3)', 
            strokeWidth: 1,
            strokeDasharray: 'none', 
          },
        }}
      />
      
      <VictoryAxis
        dependentAxis
        tickFormat={(y) => `$${y}`} 
        style={{
          tickLabels: {
            fontSize: 10,
            padding: 15,
          },
          grid: {
            stroke: 'rgba(0, 0, 0, 0.3)', 
            strokeWidth: 1,
            strokeDasharray: 'none', 
          },
        }}
      />
      
      <VictoryBar
        data={data}
        x="month"
        y="sales"
        barWidth={70} 
        style={{
          data: {
            fill: ({ datum }) => datum.color,
            stroke: ({ datum }) => datum.borderColor, 
            strokeWidth: 1, 
          },
        }}
      />
    </VictoryChart>
    
  );
};

export default VictoryBarChart;
