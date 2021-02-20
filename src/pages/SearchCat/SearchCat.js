import React, { useState, useEffect } from "react";
import {
	Container,
	Row,
	Col,
	Form,
	FormControl,
} from "react-bootstrap";
import axios from "axios";
import Card from "../../components/Card/Card";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar2/Navbar2";
import Footer from "../../components/Footer/Footer";
import { connect } from "react-redux";
import { showError } from "../../actions/modalActions";
import "./../Home/Main/Main.css";
import "./SearchCat.css";
import { useForm } from "react-hook-form";
// const url = `${process.env.REACT_APP_API_URL}`;
import { useHistory } from "react-router-dom";
const ShowAll = (props) => {
	const { handleSubmit, register } = useForm();
	const history = useHistory();
	const onSubmit = (values) => {
		const { searchh } = values;
		history.push({
			pathname: "/searchtitle",
			search: `?search=${searchh}`,
		});
	};
	const cariCategory = (values) => {
		const { search } = values;
		history.push({
			pathname: "/searchcategory",
			search: `?search=${search}`,
		})
	}


	return (
		<div>
			<Navbar />
			<Container className="mt-5 pt-5 mb-5">
				<Row className="mb-5">
					<Form
						inline
						className="mx-auto mt-5 pt-3"
						onSubmit={handleSubmit(onSubmit)}
					>
						<FormControl
							type="text"
							placeholder="Search By Title"
							className="mainInput"
							name="searchh"
							autoComplete="off"
							ref={register({ required: false })}
						/>

						<i className="fa fa-search buttonSearch "></i>
					</Form>
				</Row>
			</Container>

			<Footer />
		</div>
	);
};

const mapDispatchToProps = {
	showError
}

export default connect(null, mapDispatchToProps)(ShowAll);