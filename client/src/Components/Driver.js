import React from 'react';
import Vehicle from './Vehicles';

export default function Driver(props) {
  return (
    <React.Fragment>

      <section className="section" style={{marginTop: "90px"}}>
        <div className="left-panel">
          <div className="left-panel-content left-content-center">
            <div>
              <h5>Name: <span>Peter Pan</span></h5>
              <h6>ID: <span>1955476f-038e-4119-bae5-fcd8673bc95a</span></h6>
            </div>
          </div>
        </div>
        <div className="right-panel">
          <div className="content-center">
            <img
              src="./download.jpeg"
              alt="driver"
              style={{ maxWidth: "380px", height: "auto", borderRadius: "50%", padding: "30px 0" }}
            />
            <div>
              <div>
                <h4 className="text-center pt-3 pb-1">
                  Details
              </h4>
                <table>
                  <tbody>
                    <tr>
                      <th>Fullname</th>
                      <td />
                    </tr>
                    <tr>
                      <th>Gender</th>
                      <td />
                    </tr>
                    <tr>
                      <th>Agent</th>
                      <td />
                    </tr>
                    <tr>
                      <th>Email</th>
                      <td />
                    </tr>
                    <tr>
                      <th>Phone Number</th>
                      <td />
                    </tr>
                    <tr>
                      <th>Date of Birth</th>
                      <td />
                    </tr>
                    <tr>
                      <th>Address</th>
                      <td />
                    </tr>
                    <tr>
                      <th className="d-flex">Vehicles</th>
                      <td>
                        <table>
                          <tbody>
                            <tr>
                              <td>
                                <Vehicle />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

      </section>

    </React.Fragment>
  );
}








//     <div>
//       <div classList="card-header card text-center">Driver Info</div>
//       <div classList="card-body">
//         <table>
//           <tbody>
//             <tr>
//               <th className="d-flex">Vehicles</th>
//               <td>
//                 <table>
//                   <tbody>
//                     <tr>
//                       <td>
//                         <Vehicles />
//                       </td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </td>
//             </tr>
//             <tr>
//               <th>Fullname</th>
//               <td>#</td>
//             </tr>
//             <tr>
//               <th>Gender</th>
//               <td>#</td>
//             </tr>
//             <tr>
//               <th>Agent</th>
//               <td>#</td>
//             </tr>
//             <tr>
//               <th>Email Address</th>
//               <td>#</td>
//             </tr>
//             <tr>
//               <th>Phone Number</th>
//               <td>#</td>
//             </tr>
//             <tr>
//               <th>Date of Birth</th>
//               <td>#</td>
//             </tr>
//             <tr>
//               <th>Address</th>
//               <td />
//             </tr>
//           </tbody>
//         </table>
//         <button href="#" class="btn btn-primary" onClick={() => set}>
//           close
//         </button>
//       </div>
//     </div>
//   );
// }
