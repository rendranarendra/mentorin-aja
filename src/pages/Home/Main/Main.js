import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Jumbotron
} from "react-bootstrap";

import { connect } from 'react-redux'
import { showError } from '../../../actions/modalActions'
import Navbars from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import Category from "./../Category/Category";

import Loader from '../../../components/Loader/Loader'
import "../Main/Main.css";


// const url = `${process.env.REACT_APP_API_URL}`;

const Main = (props) => {
  const [posts] = useState([1,2,3,4,5,6,7,8]);
  const [loading] = useState(false);

  return (
    <div>
      <Navbars />
      <Jumbotron fluid className="main-background">
        <Container className="pt-5 contQuotes">
          <h3 className="text-center mt-5 pt-3 mb-3 quotesLanding quotes1">
            “Lorem ipsum dolor sit amet amet amet”
          </h3>
          <h3 className="text-center quotesLanding quotes2 pb-3">MentorinAja</h3>
          <Row>
            <Col className="text-center mt-4 mb-3">
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
            </Col>
          </Row>
        </Container>
      </Jumbotron>


      <Container className="browseContainer mt-5 pt-5">
        <Row>
          <h3 className=" ml-5 browseEve textTitle">Popular Subjek dan Mata Pelajaran</h3>
        </Row>

        <Row>
          <div className="underlineMain mb-4 ml-5"></div>
        </Row>

        <div>
          <Loader posts={posts} loading={loading} />
        </div>
      </Container>

      <br />

      <Category />

      <Category />
      <Footer />
    </div>
  );
};

const mapDispatchToProps = {
  showError
}

export default connect(null, mapDispatchToProps)(Main);