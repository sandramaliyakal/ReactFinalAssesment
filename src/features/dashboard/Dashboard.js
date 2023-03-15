import * as React from 'react';
import BarChart from './barchart';
import LineChart from './linechart';
import PieChart from './piechart';

const Dashboard = () => {
  return (
    <>
    <h2>Dashboard</h2>
      <BarChart />
      <LineChart />
      <PieChart />
    </>
  );
};

export default Dashboard;
