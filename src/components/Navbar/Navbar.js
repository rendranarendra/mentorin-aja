import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { logoutModal } from '../../actions/modalActions'
import { connect } from "react-redux";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./Navbar.css";
import Logo from "./../../image/logo.png";

// const url = `${process.env.REACT_APP_API_URL}`;

const Navbars = (props) => {
  const [viewLogin, setViewLogin] = useState();
  const history = useHistory();
  const { handleSubmit, register } = useForm();
  const onSubmit = (values) => {
    const { searchh } = values;
    history.push({
      pathname: "/searchtitle",
      search: `?search=${searchh}`,
    });
  };

  useEffect(
    () => {

      if (props.viaLogin) {
        setViewLogin(
          <div className="showLogin mr-5">
            <NavDropdown
              className="navProfile nav-link-profile text-center"
              title={
                <span>
                  <i className="fa fa-user fa-fw "></i>Profile
                </span>
              }
            >
              <NavDropdown.Item className="navDropItem text-center">
                <Link to="/profile" className="profileSetting">
                  <i className="fas fa-envelope fa-fw"></i> User Profile
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Item className="navDropItem text-center">
                <Link to="/history" className="profileSetting">
                  <i className="far fa-clock mr-2"></i>History
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item className="navDropItem text-center" onClick={props.logoutModal}>
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
            <Link to="/login" className="linkSign text-center">
              <i className="fas fa-sign-in-alt mr-2"></i>
                Sign In
            </Link>
            <Link to="/login" className="buttonSign mx-auto">
              <Button className="signButton">
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
    <Container>
      <Navbar bg="white" variant="light" expand="lg" className="navbar fixed-top">
        <Link to="/" className="brandLogo">
          <img src={Logo} alt="logo" className="imageLogo2" />
        </Link>
        <Form
          inline
          className="searchNav"
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormControl
            type="text"
            placeholder="Search By Title"
            className="searchNav2"
            name="searchh"
            autoComplete="off"
            ref={register({ required: false })}
          />

          <i className="fa fa-search iconSearchNav"></i>
        </Form>
        <Navbar.Toggle aria-controls="toogle" />
        <Navbar.Collapse id="toogle">
          <Nav className="ml-auto">
            <Link to="/event/create" className="linkCreate2 text-center">
              <i className="fas fa-plus mr-2 "></i>
              Sign In
          </Link>
            <Nav className="navProfile">{viewLogin}</Nav>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    viaLogin: state.login.viaLogin,
  };
};

const mapDispatchToProps = { logoutModal };

export default connect(mapStateToProps, mapDispatchToProps)(Navbars);