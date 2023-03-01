import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = (props) => {
  return (
    <>
      <header className="header-container">
        <NavLink to="#">
          <img src="header.jpg" alt="header-logo" className="header-logo" />
        </NavLink>
        <nav
          role="navigation"
          className="navbar navbar-expand-lg"
          aria-label="shopping list navigation"
        >
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse main-navigation">
            <NavLink
              className={(navData) =>
                "navigation-link" + (navData.isActive ? " active" : "")
              }
              to="/feed"
            >
              Feed
            </NavLink>
            <NavLink className={(navData) => "navigation-link"} to="#">
              Planner
            </NavLink>
            <NavLink
              className={(navData) =>
                "navigation-link" + (navData.isActive ? " active" : "")
              }
              to="/shoppingList"
            >
              Shopping List
            </NavLink>
            <NavLink className={(navData) => "navigation-link"} to="#">
              Search
            </NavLink>
            <NavLink
              className={(navData) =>
                "navigation-link" + (navData.isActive ? " active" : "")
              }
              to="/profilepage"
            >
              Profile
            </NavLink>

            <NavLink
              className={(navData) =>
                "navigation-link" + (navData.isActive ? " active" : "")
              }
              to="/"
            >
              Logout
            </NavLink>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
