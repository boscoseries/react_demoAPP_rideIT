import React, { useState, useEffect } from 'react';
import { MDBDataTable, MDBIcon } from 'mdbreact';

// import { getTrips } from "../server/src/api";
// import User from "../Components/TripsTable/User";
// import Pickup from "../Components/TripsTable/Pickup";
// import Destination from "../Components/TripsTable/Destination";

function Trips() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   getTrips().then(data => setData(data));
  // }, []);
  // return data.map((trip, index) => (
  return (
    <div>
      <div class="card-header card text-center">Trip Info</div>
      <table>
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
          <tr>
            <th className="d-flex">User</th>
            <td>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <table />
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <th className="d-flex">Pickup Address</th>
            <td>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <table />
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <th className="d-flex">Destination Address</th>
            <td>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <table />
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
        </table>
        <button href="#" class="btn btn-primary">
          close
        </button>
        </div>
  );
}

export default Trips;
