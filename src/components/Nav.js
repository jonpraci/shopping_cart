import React from "react";
import { NavLink } from "react-router-dom";
import Switch from "./Switch";
export const Nav = ({ toggeldark }) => {
  return (
    <div className="pair_navbar">
      <div className="pair_links">
        <NavLink
          onClick={() => window.scroll(0, 0)}
          exact
          to="/"
          activeClassName="activeLink"
        >
          Home
        </NavLink>
        <NavLink
          onClick={() => window.scroll(0, 0)}
          to="/card/saved"
          activeClassName="activeLink"
        >
          Saved
        </NavLink>
      </div>
      <div>
        <Switch toggeldark={toggeldark} />
      </div>
    </div>
  );
};
