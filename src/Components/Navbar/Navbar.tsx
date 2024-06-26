import React from "react";
import "./navbar.scss";
import { useState } from "react";
import { Menu, Close } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleNavbar = () => {
    if (window.innerWidth < 480) {
      setOpen(!open);
    }
  };

  const menuStyle = open ? "menu open" : "menu";

  return (
    <div className="navbar">
      <div className="brand">
        <a href="/">Supplements Store</a>
      </div>
      <div className="logo">
        <Menu onClick={toggleNavbar} />
      </div>
      <div className={menuStyle}>
        <ul>
          <Close className="close" onClick={toggleNavbar} />
          <li onClick={toggleNavbar}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={toggleNavbar}>
            <Link to="/products">Products</Link>
          </li>
          <li onClick={toggleNavbar}>
            <Link to="/products/add">Add Products</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
