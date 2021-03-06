import React, { Component } from "react";
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import Logo from "./pics/Jimmyz_new_logo_outlines.png";

class NavbarPage extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (

      // < !--Navbar -- >
      <nav className="mb-1 navbar navbar-expand-lg navbar-dark blue lighten-1">
        <img src={Logo}
          alt="avatar image" height="80"></img>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-555"
          aria-controls="navbarSupportedContent-555" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent-555">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-4" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-user"></i> Profile </a>
              <div className="dropdown-menu dropdown-menu-right dropdown-info" aria-labelledby="navbarDropdownMenuLink-4">
                <a className="dropdown-item" href="/Account">My account</a>
                <a className="dropdown-item" href="#">Log out</a>
              </div>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/Appointments">Appointments
          <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="Account">Account Info</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Clients">Client Search</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" target="_blank" href="https://m.me/281457917012">Messages</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavbarPage;