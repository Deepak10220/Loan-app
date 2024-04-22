import React from 'react';
import { Pie } from "react-chartjs-2";

const Piechart = ({chartData}) => {
  return (
    <div className="chart-container" style={{ width: '400px', height: '400px', alignItems:"center" }}>
    <h2 style={{ textAlign: "center" }}>Pie Chart</h2>
    <Pie 
      data={chartData}
      options={{
        plugins: {
          title: {
            display: true,
            text: "Monthly Payment Charges"
          }
        }
      }}
    />
  </div>
  )
}

export default Piechart;