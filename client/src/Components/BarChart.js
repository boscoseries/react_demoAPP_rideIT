import React from "react";
import { Chart } from "react-google-charts";


function BarChart (props) {

  return (
    <div>
      <Chart
        width={'400px'}
        height={'300px'}
        chartType="Bar"
        loader={<div>Loading Chart</div>}
        data={[
          ['Bills on Trips', '', ''],
          ['Total Billed', props.total, 0],
          ['Cash Billed', props.cash, 0],
          ['Non-cash Billed', props.nonCash, 0],
        ]}
        options={{
          title: 'Population of Largest U.S. Cities',
          chartArea: { width: '30%' },
          hAxis: {
            title: 'Total Population',
            minValue: 1,
          },
          vAxis: {
            title: 'City',
          },
        }}
        // For tests
        rootProps={{ 'data-testid': '1' }}
      />
    </div>
  );
}

export default BarChart
