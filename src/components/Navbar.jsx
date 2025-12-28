import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  
  const role = "customer"; //for initial navbar

  const links = (
    <>
      {role === "customer" && (
        <>
          <li><NavLink to="/booking">Booking</NavLink></li>
          <li><NavLink to="/track-parcels">Track Parcel</NavLink></li>
          <li><NavLink to="/booking-history">Booking History</NavLink></li>
        </>
      )}

      {role === "admin" && (
        <>
          <li><NavLink to="/admin/dashboard">Dashboard</NavLink></li>
          <li><NavLink to="/admin/assign">Assign Agent</NavLink></li>
        </>
      )}

      {role === "agent" && (
        <>
          <li><NavLink to="/agent/parcels">My Parcels</NavLink></li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            ☰
          </div>
          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost text-xl">
          Excel Courier
        </NavLink>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>

      <div className="navbar-end">
        <Link className="btn" to="/login">Login</Link>
        <Link className="btn" to="/register">Register</Link>
      </div>
    </div>
  );
}
