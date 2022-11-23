import React from "react";
import BasicInfo from "../components/BasicInfo";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import PasswordChange from "../components/PasswordChange";

function Profile() {
  const [toggleState, setToggleState] = useState(true);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div>
      <div className="main-profile">
        <Paper elevation={1}>
          <div className="profile">
            <div className="profile-nav">
              <a
                className={toggleState === true ? "tabsactive-tabs" : null}
                onClick={() => {
                  toggleTab(true);
                }}
              >
                Personal Details
              </a>
              <a
                className={toggleState === false ? "tabsactive-tabs" : null}
                onClick={() => {
                  toggleTab(false);
                }}
              >
                Change Password
              </a>
            </div>
            {toggleState ? <BasicInfo /> : <PasswordChange />}
          </div>
        </Paper>
      </div>
    </div>
  );
}

export default Profile;
