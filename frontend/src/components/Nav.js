import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Nav.css";
const Nav = () => {
  const navigate = useNavigate();
  const auth = localStorage.getItem("user");
  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };
  return (
    <div className="navv">
      <h3 style={{paddingTop:"15px"}}>Contact Number List</h3>
      {auth ? (
        <ul className="nav-ul">
          <li>
            <Link className="links"  to="/"> Home </Link>
          </li>
          {/* <li>
            <Link   className="links"  to="/add"> Products </Link>
          </li> */}
          <li>
            <Link  className="links"  to="/add">Create Contact</Link>
          </li>
          {/* <li>
            <Link  className="links"  to="/update"> Update Data </Link>
          </li> */}
          <li>
            <Link  className="links"  to="/update"> Profile </Link>
          </li>
          <li>
            <Link  className="links"  onClick={logout} to="/signup">
              Logout
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="nav-ul">
          <li>
            <Link  className="links"  to="/signup"> Signup</Link>
          </li>
          <li>
            <Link   className="links" to="/login"> Login</Link>
          </li>
        </ul>
      )}
    </div>
  );
};
export default Nav;
