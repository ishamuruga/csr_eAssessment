import React, { CSSProperties,useEffect,useState } from 'react';
import { CeCCategory, fetchCeCCategory } from '@e-v-assessment-workspace/lib-auth';

import './add-cec-data.css';
//import CeCCategory from 'libs/lib-auth/src/lib/model/CeCCategory';

export default function AddCecData() {
  const [cecCategory,setCecCategory] = useState([]);

  const marginTop: CSSProperties = {
    marginTop: '10px',
  };

  const cardsWidth: CSSProperties = {
    width: '900px',
  };

  useEffect(()=>{
    console.log("Use Effect in action");
    //setCecCategory(fetchCeCCategory());
    fetchCeCCategory().then(res=>{
    //console.log("####################################")
    //console.log(fetchCeCCategory());
      setCecCategory(res.data);
    })
  },[]);
  // style={cardsWidth}
  return (
    <div className="container jumbotron" style={marginTop}>
      <div>
        <div className="divider d-flex align-items-center my-2 divtext">
          <h5 className="text-center fw-bold mx-3 mb-0">Enter CeC Details</h5>
        </div>
        <div className="card">
          <div className="card-header">
            <p>
              <strong>CEC Manager :- </strong>Manic Basha
            </p>
            <p>
              <strong>Date of Entry :- </strong>12-Sep-2022 12:34:23
            </p>
          </div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="firstname">Employee Name:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter First Name"
                />
              </div>
              <div className="form-group">
                <div className="row">
                  <div className="col-md-6 col-xs-12">
                    <label htmlFor="address">Employee Email:</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Employee Email"
                    />
                  </div>
                  <div className="col-md-6 col-xs-12">
                    <label htmlFor="address2">Emaployee Id:</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Employee Id"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="row">
                  <div className="col-md-6 col-xs-12">
                    <label htmlFor="address">Issue Category:</label>
                    <select
                      className="form-control"
                    >
                       <option value="-1">Please select a Category</option>
                      {
                        cecCategory.map((x:CeCCategory)=>{
                          return (
                            <option value={x.id}>{x.name}</option>      
                          )
                        })
                      }
                     
                    </select>
                  </div>
                  <div className="col-md-6 col-xs-12">
                    <label htmlFor="address2">Issue Reported Date:</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Employee Id"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* <div className="jumbotron">
          <div className="container text-center text-lg-left">
            <div className="row">
              <div className="col-lg-8">
                <h1 className="display-4">
                  Thanks for supporting our Cotton Ball making request
                </h1>
                <p className="text-muted">
                  Please refer to attached video for reference
                </p>
                <span className="text-center d-inline-block">
                  <a
                    className="btn btn-primary btn-lg w-100"
                    target="new"
                    href="https://www.youtube.com/watch?v=QLEAsSU_dpg"
                    role="button"
                  >
                    How to Make Cotton Balls
                  </a>
                </span>
              </div>
               <div className="col-lg-4 align-items-center d-flex">
                <img
                  src="https://hips.hearstapps.com/ghk.h-cdn.co/assets/cm/15/11/480x262/54ff2672323bf-cotton-balls-hands-3-msc.jpg?resize=768:*"
                  alt=""
                  className="img-fluid"
                />
              </div> 
            </div>
          </div>
        </div> */}
      </div>
    </div>
    // <div className="container" style={marginTop}>
    //   <br />
    //   <h1>CEC Data Submission</h1>
    //   <div className="card">
    //     <div className="card-header">
    //       <p><strong>CEC Manager :- </strong>Manic Basha</p>
    //       <p><strong>Date of Entry :- </strong>12-Sep-2022 12:34:23</p>
    //     </div>
    //     <div className="card-body">
    //       <form>
    //         <div className="divider d-flex align-items-center my-2 divtext">
    //           <h4 className="text-center fw-bold mx-3 mb-0">
    //             Personal Details
    //           </h4>
    //         </div>
    //         <div className="form-group">
    //           <label htmlFor="firstname">First Name:</label>
    //           <input
    //             type="text"
    //             className="form-control"
    //             placeholder="Enter First Name"
    //           />
    //         </div>
    //         <div className="form-group">
    //           <div className="row">
    //             <div className="col-md-6 col-xs-12">
    //               <label htmlFor="address">Address 1:</label>
    //               <input
    //                 type="text"
    //                 className="form-control"
    //                 placeholder="Enter Address 1"
    //               />
    //             </div>
    //             <div className="col-md-6 col-xs-12">
    //               <label htmlFor="address2">Address 2:</label>
    //               <input
    //                 type="text"
    //                 className="form-control"
    //                 placeholder="Enter Address 2"
    //               />
    //             </div>
    //           </div>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </div>
  );
}
