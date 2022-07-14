import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Sidebar.module.scss";

const Sidebar = (props) => {
  return (
    <div className={`${classes.sidebar} ${props.className}`}>
      <div className={classes.sidebar_logo}>
        <img src="images/logo2.png" alt="" />
      </div>

      <hr />
      <ul>
        <li>
          <NavLink
            to="/dashboard_em"
            className={({ isActive }) => (isActive ? `${classes.active}` : "")}
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/11">Messages</NavLink>
        </li>
        <li>
          <NavLink to="/12">Employees</NavLink>
        </li>
        <li>
          <NavLink to="/12">Add a team</NavLink>
        </li>
        <li>
          <NavLink to="/13">Support</NavLink>
        </li>
        <li>
          <NavLink to="/14">Settings</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
