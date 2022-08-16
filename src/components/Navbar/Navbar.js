import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <div className={classes.navbar}>
        <div className={classes["navbar-title"]}>
          <h2 style={{ margin: "0" }}>React JS Assignments</h2>
        </div>
        <div className={classes["navbar-menu"]}>
          <nav>
            <ul>
              <li>
                <NavLink activeClassName={classes.active} to="/assignment1">
                  Assignment1
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName={classes.active} to="/assignment2">
                  Assignment2
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
