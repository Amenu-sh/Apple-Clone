import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom"; 

class NavbarList extends Component {
  render() {
    return (
      <li className="nav-item">
        <Link className="nav-link js-scroll-trigger" to={this.props.linkUrl}>
          { this.props.linkName}
        </Link>
      </li>
    );
  }
}
export default NavbarList;
