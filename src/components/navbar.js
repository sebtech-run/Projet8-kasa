import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav-header">
      <NavLink to="/" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }>
        Accueil
      </NavLink>
      <NavLink to="/about"  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }>
        A Propos
      </NavLink>
    </nav>
  );
};

export default Nav;