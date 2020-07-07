import React, { Component } from "react";

import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <h1>Logo</h1>
      <ul>
        <Link to="/about">
          <li>About</li>
        </Link>

        <Link to="/shop">
          <li>Shop</li>
        </Link>
      </ul>
    </div>
  );
};

export default Nav;
