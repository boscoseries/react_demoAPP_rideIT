import React from 'react';
import { useState, useEffect } from 'react';
import { MDBDataTable, MDBIcon } from 'mdbreact';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

export default function TripsTable(props) {
  const [clickedStatus, setClickedStatus] = useState(false);

  const data = {
    columns: [
      {
        label: '',
        field: 'name',
        sort: 'asc',
        width: 40,
      },
      {
        label: 'Trip ID',
        field: 'tripId',
        sort: 'asc',
        width: 220,
      },
      {
        label: 'Driver',
        field: 'driver',
        sort: 'asc',
        width: 220,
      },
      {
        label: 'User',
        field: 'user',
        sort: 'asc',
        width: 180,
      },
      {
        label: 'Billed',
        field: 'billed',
        sort: 'asc',
        width: 150,
      },
    ],
    rows: [
      {
        name: <i class="fa-expand" aria-hidden="true" />,
        tripId: '',
        driverName: '',
        username: '',
        billed: '',
      }
    ],
  };

  function handleClick(e) {
    e.preventDefault();
    // e.persist()
    // setClickedStatus(!clickedStatus);
  }

  props.allTrips.map((trip, index) => {
    data.rows[index] = {
      name: (
        <MDBIcon
          icon="info"
          trip={trip}
          style={{ display: 'flex', justifyContent: 'center' }}
          onClick={handleClick}
        />
      ),
      tripId: trip['tripID'],
      driverName: trip['driverID'],
      username: trip.user.name,
      billed: `$${trip['billedAmount']}`,
    };
  });

  return !clickedStatus ? (
    <MDBDataTable
      scrollY
      maxHeight="23vh"
      striped
      bordered
      small
      data={data}
    />
  ) : (
    <div className="card text-cener" style={{ height: '100%' }}>
      <h3 className="card-header card-title">Trip Info</h3>
      <div className="card-body">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <table className="d-flex">
            <tbody>
              <tr>
                <th>Trip ID</th>
                <td>#</td>
              </tr>
              <tr>
                <th>Driver ID</th>
                <td>#</td>
              </tr>
              <tr>
                <th>Billed Amount</th>
                <td>#</td>
              </tr>
              <tr>
                <th>Paid in Cash</th>
                <td>#</td>
              </tr>
              <tr>
                <th>Created</th>
                <td>#</td>
              </tr>
            </tbody>
          </table>

          <table className="d-flex">
            <thead>
              <td>User:</td>
            </thead>
            <tbody>
              <tr>
                <th>Name</th>
                <td>#</td>
              </tr>
              <tr>
                <th>Gender</th>
                <td>#</td>
              </tr>
              <tr>
                <th>Company</th>
                <td>#</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>#</td>
              </tr>
              <tr>
                <th>Phone Number</th>
                <td>#</td>
              </tr>
            </tbody>
          </table>

          <table className="d-flex">
            <thead>
              <td>Pick-up:</td>
            </thead>
            <tbody>
              <tr>
                <th>Address</th>
                <td>#</td>
              </tr>
              <tr>
                <th>Latitude</th>
                <td>#</td>
              </tr>
              <tr>
                <th>Longitude</th>
                <td>#</td>
              </tr>
            </tbody>
          </table>

          <table className="d-flex pd-r">
            <thead>
              <td>Destination:</td>
            </thead>
            <tbody>
              <tr>
                <th>Address</th>
                <td>#</td>
              </tr>
              <tr>
                <th>Latitude</th>
                <td>#</td>
              </tr>
              <tr>
                <th>Longitude</th>
                <td>#</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <button
            href="#"
            className="btn btn-secondary btn-sm"
            onClick={handleClick}
          >
            close
          </button>
        </div>
      </div>
    </div>
  );
}
