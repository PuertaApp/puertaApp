import styled from "styled-components";
import FloatingSearchForm from "../components/styles/FloatingSearchForm";
import Button from "../components/Button";
import { signinUser } from "../lib/auth";
import Router from "next/router";
import DoorLogo from "../components/icons/DoorLogo";
import SignInCard from "../components/SignInCard";
import fetch from "isomorphic-fetch";

class Signin extends React.Component {
	state = {
		email: "",
		error: "",
		success: "",
		isLoading: false,
		type: "signin"
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
	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	handleClose = () => {
		this.setState({ error: "" });
	};
	showError = err => {
		const error = (err.response && err.response.data) || err.message;
		this.setState({ error, isLoading: false });
	};
	handleSubmit = event => {
		const user = {
			email: "test@test.com",
			password: "pass",
			phone: "5506659213",
			role: "buyer"
		};
		event.preventDefault();
		this.setState({ isLoading: true });
		signinUser(user)
			.then(() => Router.push("/"))
			.catch(this.showError);
	};
	clearState = () => {
		if (this.state.type === "signin") {
			this.setState({ type: "signup" });
		} else {
			this.setState({ type: "signin" });
		}
	};
	render() {
		return <SignInCard />;
	}
}

export default Signin;
