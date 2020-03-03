import React from "react";
import { Link } from "react-router-dom";

export const Layout = props => {
  return (
    <div className="h-100 layout">
      <nav className="d-flex align-items-center justify-content-center p-2 top-nav">
        <Link to="/">Home</Link>
      </nav>
      <div className="content d-flex flex-column align-items-center justify-content-center">
        {props.children}
      </div>
      <footer></footer>
    </div>
  );
};

export default Layout;
