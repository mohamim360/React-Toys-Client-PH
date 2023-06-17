import React from "react";
import { Helmet } from "react-helmet-async";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar shadow-lg bg-neutral text-neutral-content">
      <div className="flex-none px-2">
        <Link className="nav-link" to="/">Toy Merchant</Link>
      </div>
      <div className=" gap-4">
        <NavLink className="nav-link" to="/alltoys">
          All Toys
        </NavLink>
        <NavLink className="nav-link" to="/mytoy">
          My Toys
        </NavLink>
        <NavLink className="nav-link" to="/addtoy">
          Add A Toy
        </NavLink>
        <NavLink className="nav-link" to="/blog">
          Blog
        </NavLink>
      </div>
      <div className="flex-none">
        <button className="btn btn-primary">Login</button>
      </div>
    </div>
  );
};

export default Header;
