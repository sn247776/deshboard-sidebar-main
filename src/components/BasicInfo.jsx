import React from "react";

function BasicInfo() {
  return (
    <div className="basic-info">
      <p>Full Name:</p>
      <input type={"text"} />
      <p>Email:</p>
      <input type={"email"} />
      <p>Mobile Number:</p>
      <input type={"mobile"} />
      <p>Address</p>
      <textarea rows={"5"}></textarea>
      <div>
        <button>Save Changes</button>
      </div>
    </div>
  );
}

export default BasicInfo;
