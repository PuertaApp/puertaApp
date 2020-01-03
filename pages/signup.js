import styled from "styled-components";
import FloatingSearchForm from "../components/styles/FloatingSearchForm";
import Button from "../components/Button";
import { signinUser, signupUser } from "../lib/auth";
import Router from "next/router";
import SignUpCard from "../components/SignUpCard";
import fetch from "isomorphic-fetch";
import axios from 'axios';

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
	handleSubmit = async e => {
    const user = {
      name: "RickJames",
			email: "test@test2.com",
			password: "pass",
			phone: "5506659213",
			role: "buyer"
		};
    try {
      const { data } = await axios.post('/api/auth/signup', user);
      console.log(data);
      signinUser(user)
			.then(() => Router.push("/"))
			.catch(this.showError);
    } catch (e){
      console.log(e)
    }
		// if signin, push to home route 
	};
	render() {
		return <SignUpCard e={this.handleSubmit} />;
	}
}

export default Signup;
