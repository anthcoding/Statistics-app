//React
import React from "react";
//Styles
import "./Chart.component.css";
//Components
import ChartBar from "./ChartBar.component";

const Chart = ({ dataPoints }) => {
  const dataPointsValues = dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximun = Math.max(...dataPointsValues);
  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          label={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximun}
        />
      ))}
    </div>
  );
};

export default Chart;
