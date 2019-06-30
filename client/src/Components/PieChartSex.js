import React from 'react';
import { Chart } from 'react-google-charts';

export default function PieChartSex (props) {

  return (
    <div>
      <Chart
        width={'500px'}
        height={'300px'}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['Task', 'Total Persons'],
          ['Male', props.male],
          ['Female', props.female],
        ]}
        options={{
          title: 'Male-Female Drivers',
        }}
        rootProps={{ 'data-testid': '1' }}
      />
    </div>
  );
}
