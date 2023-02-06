import React from "react";
import { NavLink } from "react-router-dom";

import { ImCart } from "react-icons/im";
import { AiFillHome } from "react-icons/ai";

import "./styles.css";

const Header = () => {
  return (
    <div className="nav">
      <ul>
        <li>
          <NavLink to="/">
            <AiFillHome className="icon" />
            <span className="title">Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart">
            <ImCart className="icon" />
            <span className="title">Carrinho</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default Header;
