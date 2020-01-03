import styled from "styled-components";
import FloatingSearchForm from "../components/styles/FloatingSearchForm";
import Button from "../components/Button";
import { signinUser } from "../lib/auth";
import Router from "next/router";
import SignUpCard from "../components/SignUpCard";
import fetch from "isomorphic-fetch";

class Signup extends React.Component {
	state = {
		email: "",
		error: "",
		success: "",
		isLoading: false
	};

	componentDidMount() {
		if ("serviceWorker" in navigator) {
			navigator.serviceWorker
				.register("/service-worker.js")
				.then(registration => {
					console.log("service worker registration successful");
				})
				.catch(err => {
					console.warn(
						"service worker registration failed",
						err.message
					);
				});
		}
	}
	handleSubmit = e => {
		const user = {
			email: "test@test.com",
			password: "pass",
			phone: "5506659213",
			role: "buyer"
		};
		fetch("http://localhost:3000/api/auth/signup", user)
			.then(res => res.json())
			.then(res => {
				console.log(res);
			});
	};
	render() {
		return <SignUpCard e={this.handleSubmit} />;
	}
}

export default Signup;
