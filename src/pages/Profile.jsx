import React from "react";
import BasicInfo from "../components/BasicInfo";
import ProfileNav from "../components/ProfileNav";
import Paper from "@mui/material/Paper";

function Profile() {
  return (
    <div>
      <div className="main-profile">
        <Paper elevation={1}>
          <div className="profile">
            <ProfileNav />
            <BasicInfo />
          </div>
        </Paper>
      </div>
    </div>
  );
}

export default Profile;
