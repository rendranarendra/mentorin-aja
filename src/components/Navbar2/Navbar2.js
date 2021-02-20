import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { logoutModal } from '../../actions/modalActions'
import { connect } from "react-redux";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import "./Navbar2.css";
import Logo from "./../../image/logo.png";

// const url = `${process.env.REACT_APP_API_URL}`;

const Navbars = (props) => {
  const [viewLogin, setViewLogin] = useState();
  const history = useHistory();
  const pushKlik = () => {
    const token = localStorage.getItem("access-token");
    if (!token) {
      history.push("/login");
    } else {
      history.push("/event/create");
    }
  };

  useEffect(
    () => {

      if (props.viaLogin) {
        setViewLogin(
          <div className="showLogin">
            <NavDropdown
              className="mr-5 pr-3 navProfile nav-link-profile"
              title={
                <span>
                  <i className="fa fa-user fa-fw "></i>Profile
                </span>
              }
            >
              <NavDropdown.Item className="navDropItem">
                <Link to="/profile" className="profileSetting">
                  <i className="fas fa-envelope fa-fw"></i> User Profile
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Item className="navDropItem">
                <Link to="/history" className="profileSetting">
                  <i className="far fa-clock mr-2"></i>History
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item className="navDropItem" onClick={props.logoutModal}>
                <Link
                  to="#"
                  className="fas fa-sign-out-alt i-logout mr-2"
                ></Link>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </div>
        );
      } else {
        setViewLogin(
          <Nav>
            <Link to="/login">
              <Button className="signInButton signButton">
                Sign In
                <i className="fas fa-sign-in-alt ml-2"></i>
              </Button>
            </Link>
          </Nav>
        );
      }
    },
    [props.viaLogin, props.logoutModal]
  );

  return (
    <Navbar bg="white" variant="light" expand="lg" className="navbar fixed-top">
      <Link to="/" className="mr-3 brandLogo">
        <img src={Logo} alt="logo" className="imageLogo2" />
      </Link>
      <Navbar.Toggle aria-controls="toogle" />
      <Navbar.Collapse id="toogle">
        <Nav className="ml-auto navbar-nav">
          <Link to="/event/create" id="createLink">
            <Button
              className="signInButton mr-3 createButton"
              onClick={pushKlik}
            >
              <i className="fas fa-plus mr-2 "></i>
              Create Events
            </Button>
          </Link>
          <Nav className="navProfile">{viewLogin}</Nav>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

const mapStateToProps = (state) => {
  return {
    viaLogin: state.login.viaLogin,
  };
};

const mapDispatchToProps = { logoutModal };

export default connect(mapStateToProps, mapDispatchToProps)(Navbars);