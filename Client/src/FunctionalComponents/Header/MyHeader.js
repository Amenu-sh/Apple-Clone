import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import HeaderLink from "./HeaderLink";
import NavbarList from "./NavbarList";

import logo from "../../../src/resources/Images/Icons/logo-sm.png";
import search from "../../../src/resources/Images/Icons/search-icon-sm.png";
import cart from "../../../src/resources/Images/Icons/cart-sm.png";

function MyHeader() {
  return (
    <div className="nav-wrapper fixed-top navbar navbar-toggleable-sm ">
      <container>
        <nav>
          <Navbar className="w-100" collapseOnSelect expand="lg" variant="dark">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <link className="Navbar-Brand mx-auto" to="/">
              <img src={logo} alt="apple" />
            </link>
            <Navbar.Collapse id="basic-navbar-nav">
              <ul className="navbar-nav nav-justified w-100 nav-fill">
                {/* <NavbarList className="nav-link" linkUrl="/mac">
                    Mac
                  </NavbarList>
                  <NavbarList linkUrl="/iphone">iphone</NavbarList>
                  <NavbarList linkUrl="/ipad">ipad</NavbarList>
                  <NavbarList linkUrl="/watch">watch</NavbarList>
                  <NavbarList linkUrl="/Airpods">Airpods</NavbarList>
                  <NavbarList linkUrl="/TV & Home">TV & Home</NavbarList>
                  <NavbarList linkUrl="/Entertainment">Entertainment</NavbarList>
                  <NavbarList linkUrl="/Accessories">Accessories</NavbarList>
                  <NavbarList linkUrl="/support">Support</NavbarList>
                  <NavbarList linkUrl="/search">
                    <img src={search} alt="" />
                  </NavbarList>
                  <NavbarList linkUrl="/cart">
                    <img src={cart} alt="" />
                  </NavbarList> */}
                <NavbarList linkUrl="/mac" linkName="Mac" />
                <NavbarList linkUrl="/iphone" linkName="iphone" />
                <NavbarList linkUrl="/ipad" linkName="ipad" />
                <NavbarList linkUrl="/watch" linkName="watch" />
                <NavbarList linkUrl="/Airpods" linkName="Airpods" />
                <NavbarList linkUrl="/TV & Home" linkName="TV & Home" />
                <NavbarList linkUrl="/Entertainment" linkName="Entertainment" />
                <NavbarList linkUrl="/Accessories" linkName="Accessories" />
                <NavbarList linkUrl="/support" linkName="support" />

                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/">
                    <img src={search} alt="search" />
                  </Link>
                  <Link className="nav-link js-scroll-trigger" to="/">
                    <img src={cart} alt="cart" />
                  </Link>
                </li>
              </ul>
            </Navbar.Collapse>
          </Navbar>
        </nav>
      </container>
    </div>
  );
}

export default MyHeader;
