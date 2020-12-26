import React from "react";
import { NavLink } from "react-router-dom";
export const Navigation = (props: any) => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg fixed-top bg-dark">
        <NavLink to="/" className="nav-link text-white">
          <img src={props.logo} alt="" style={{ width: 60, height: 30 }} />
        </NavLink>
        <NavLink to="/projects" className="nav-link text-white">
          {" "}
          Project
        </NavLink>
        <NavLink to="About" className="nav-link text-white">
          Gallery
        </NavLink>
        <NavLink to="/me" className="nav-link text-white">
          Members
        </NavLink>
        <NavLink to="/form" className="nav-link text-white">
          Contact
        </NavLink>
      </nav>
    </header>
  );
};
