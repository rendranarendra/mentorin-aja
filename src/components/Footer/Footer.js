import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Jumbotron,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Footer.css";

import Logo from "../../image/footer-logo.png";

class Footer extends Component {
  render() {
    return (
      <div>
        <Jumbotron fluid className="jumbotronFooter mb-0 p-0 pt-2 pb-2">
          <Container>
            <Row className="text-center">
              <Col md={4} sm={12}>
                <div className="mt-5">
                  <Link to="/">
                    <img
                      src={Logo}
                      alt="logo"
                      className="mx-auto d-block mb-3"
                    />
                  </Link>
                  <p className="text-wheat-50 text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas, augue sed scelerisque posuere. Nulla eu elit tincidunt, sodales enim vitae, aliquet erat. Nullam dictum faucibus turpis ac accumsan. Vivamus gravida commodo risus quis auctor. Curabitur sed dolor vitae ex efficitur pharetra. Phasellus turpis orci, varius ut nunc nec, tincidunt tincidunt diam. Suspendisse ac iaculis dolor. Aliquam semper, urna venenatis ullamcorper tristique, sapien orci fermentum lorem, id porta mauris augue nec nulla
                  </p>
                </div>
              </Col>
              <Col md={4} sm={12}>
                <div className="mt-5 pt-3 text-center">
                  <Link to="/about" className="footerNav">
                    <h5>About Us</h5>
                  </Link>
                </div>
              </Col>
              <Col md={4} sm={12} className="Subscribe">
                <div className="text-left mt-5 pt-3">
                  <h5>
                    <b>Subscribe to our Newsletter</b>
                  </h5>
                  <h6>Get Notification for new Events or Offers</h6>
                  <Form inline className="mx-auto mt-3 mb-3">
                    <FormControl
                      type="text"
                      // placeholder="Enter your email here"
                      placeholder="Coming soon ..."
                      className="formInput"
                    />
                    <Button variant="primary" className="buttonSubscribe ml-2">
                      <span>SUBSCRIBE</span>
                    </Button>
                  </Form>
                </div>
              </Col>
            </Row>

            <Row>
              <Col
                md={{ span: 6, offset: 5 }}
                className="mt-4 mx-auto text-center"
              >
                © 2021 Copyright Mentorin Aja
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default Footer;
