import React, { Component } from "react";

import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Team from "./Team";

import "./About.css";

import calender from "../../image/calender.png";

import contact from "../../image/about/contact.jpg";
import host from "../../image/about/host.jpg";
import event from "../../image/about/event.jpg";

class About extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<Container className="mt-5 pt-5 mb-5">
					<Row>
						<Col>
							<h2 className="text-center mt-3 about-title">About Us</h2>
							<div className="underlineAbout mx-auto"></div>
						</Col>
					</Row>

					<Row>
						<Col md={6} xl={6} sm={12}>
							<h3 className="about-top">
								What is <span style={{ color: "red" }}>MentorinAja</span>?
							</h3>
							<p className="text-justify about-text">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
							Aenean egestas, augue sed scelerisque posuere, 
							risus nunc interdum magna, 
							a feugiat mauris lorem non orci. 
							Ut dolor neque, laoreet sed facilisis id, 
							porttitor ut neque. Nulla eu elit tincidunt, 
							sodales enim vitae, aliquet erat. Nullam dictum faucibus turpis ac accumsan. 
							Vivamus gravida commodo risus quis auctor. Curabitur sed dolor vitae ex efficitur pharetra. 
							Phasellus turpis orci, varius ut nunc nec, tincidunt tincidunt diam. 
							Suspendisse ac iaculis dolor. Aliquam semper, urna venenatis ullamcorper tristique, 
							sapien orci fermentum lorem, id porta mauris augue nec nulla. 
							Maecenas venenatis iaculis nibh in lacinia. Pellentesque eget lacus id ex ullamcorper sodales. 
							Morbi semper ullamcorper tortor sit amet pretium.
							</p>
						</Col>
						<Col md={6} sm={12}>
							<img src={calender} alt="calender" className="calender-img" />
						</Col>
					</Row>
				</Container>

				<Container className="mb-5 pb-3 ">
					<Row>
						<Col md={4} xl={4} sm={12}>
							<div className="photo-grid">
								<div className="grid-item">
									<Link to="/event/create">
										<figure>
											<img src={host} height="100%" width="100%" alt="host" />
											<figcaption>
												<p>Be a Mentor</p>
											</figcaption>
										</figure>
									</Link>
								</div>
							</div>
						</Col>

						<Col lg={4} md={8} sm={12}>
							<div className="photo-grid">
								<div className="grid-item">
									<Link to="/">
										<figure>
											<img src={event} height="100%" width="100%" alt="event" />
											<figcaption>
												<p>Book your study session</p>
											</figcaption>
										</figure>
									</Link>
								</div>
							</div>
						</Col>

						<Col md={4} sm={12}>
							<div className="photo-grid">
								<div className="grid-item">
									<Link to="/contact">
										<figure>
											<img
												src={contact}
												height="100%"
												width="100%"
												alt="contact"
											/>
											<figcaption>
												<p>Contact Us for more Information</p>
											</figcaption>
										</figure>
									</Link>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			<Footer />
			</div>
		);
	}
}

export default About;
