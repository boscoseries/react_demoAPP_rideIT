import React, { useState, useEffect } from 'react';
import PieChartSex from '../Components/PieChartSex';
import PieChartTrips from '../Components/PieChartTrips';
import BarChart from '../Components/BarChart';

import fetch from 'node-fetch';
import TripsTable from '../Components/TripsTable';

export default function Dashboard () {
  const [state, setState] = useState({});
  const [trips, setTrips] = useState([]);


  useEffect(() => {
    fetch('/api/stats')
      .then(response => response.json())
      .then(res => res.data)
      .then(data => setState(data))
      .catch(error => console.error("/stat error", error));
  }, []);

  useEffect(() => {
    fetch('/api/trips')
      .then(response => response.json())
      .then(res => res.data)
      .then(data => setTrips(data))
      .catch(error => console.error("/trips error", error))
  }, []);


  const {
    male,
    female,
    billedTotal,
    cashBilledTotal,
    nonCashBilledTotal,
    noOfCashTrips,
    noOfNonCashTrips,
  } = state;

  return (
    <header className="dash-masthead">
      <div className="h-100">
        <div className="wrapper">
          <section className="pie">
            <PieChartSex male={male} female={female} />
          </section>
          <section className="pie">
            <PieChartTrips
              isCash={noOfCashTrips}
              isntCash={noOfNonCashTrips}
            />
          </section>
          <section className="pie">
            <BarChart
              total={billedTotal}
              nonCash={nonCashBilledTotal}
              cash={cashBilledTotal}
            />
          </section>
        </div>
        <div id="bar-section">
          <section id="trip-table">
            <TripsTable allTrips={trips} />
          </section>
        </div>
      </div>
    </header>
  );
}
