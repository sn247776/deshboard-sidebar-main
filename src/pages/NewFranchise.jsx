import { Paper } from "@mui/material";
import React from "react";

function NewFranchise() {
  return (
    <Paper>
      <div className="basic-info">
        <div>
          <div className="personal">
            <h2>Personal Details</h2>
            <p>Name</p>
            <input className="basic-input" />
            <p>Father/Mother Name</p>
            <input className="basic-input" />
            <p>Contact Number</p>
            <input className="basic-input" />
            <p>Date of Birth</p>
            <input type={"date"} className="basic-input" />
            <p>User Name</p>
            <input className="basic-input" />
            <p>Password</p>
            <input className="basic-input" />
          </div>
          <div>
            <h2>Profection Details</h2>
            <p>Company Name</p>
            <input className="basic-input" />
            <p>Year of Expreance</p>
            <input className="basic-input" />
            <p>Date of Joining</p>
            <input type={"date"} className="basic-input" />
          </div>
        </div>
        <div>
          <div>
            <h2>Bank Details</h2>
            <p>Bank Name</p>
            <input className="basic-input" />
            <p>Branch</p>
            <input className="basic-input" />
            <p>Account Number</p>
            <input className="basic-input" />
            <p>IFSC Code</p>
            <input className="basic-input" />
            <p>UPI Number</p>
            <input className="basic-input" />
          </div>
          <div className="info-tab">
            <h2>Address</h2>
            <p>Permanent Address</p>
            <textarea className="basic-input"></textarea>
          </div>
          <div>
            <h2>Education</h2>
            <input className="basic-input" />
          </div>
        </div>
      </div>
    </Paper>
  );
}

export default NewFranchise;
