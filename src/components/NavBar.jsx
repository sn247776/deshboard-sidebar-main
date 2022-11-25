import { Paper } from "@mui/material";
import React from "react";
import { BiSearch } from "react-icons/bi";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";

import MenuItem from "./MenuItem";

function NavBar(props) {
  return (
    <div className="nav-bar">
      <div>
        <p>Pages / {props.page}</p>
        <h1>{props.page}</h1>
      </div>
      <div>
        <div className="right-nav">
          <BiSearch />
          <input placeholder="Search..." className="searchTerm" />
          <Badge badgeContent={4} color="primary">
            <MailIcon color="action" />
          </Badge>
          <div>
            <MenuItem />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
