import React from 'react';

function Trips() {
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
