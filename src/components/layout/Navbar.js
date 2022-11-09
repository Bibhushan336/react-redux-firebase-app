import React from "react";
import { Link } from "react-router-dom";
import SignedInLink from "./SignedInLInk";
import SignedOutLink from "./SignedOutLink";

const Navbar = () => {
  return (
    <div>
      <nav className="nav-wrapper grey darken-3">
        <div className="container">
          <Link to="/" className="brand-logo">
            firebase-react
          </Link>
          <SignedInLink />
          <SignedOutLink />
        </div>
      </nav>  
    </div>
  );
};

export default Navbar;
