import styled from 'styled-components'
import FloatingSearchForm from '../components/styles/FloatingSearchForm'
import Button from '../components/Button'
import { signinUser } from '../lib/auth';
import Router from 'next/router';
import DoorLogo from '../components/icons/DoorLogo'
import SignUpCard from '../components/SignUpCard';
import SignInCard from '../components/SignInCard';

class Signin extends React.Component {
  state = {
    email: "",
    error: "",
    success: "",
    isLoading: false,
    type: "signin"
  };
  componentDidMount () {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then(registration => {
          console.log('service worker registration successful')
        })
        .catch(err => {
          console.warn('service worker registration failed', err.message)
        })
    }    
  }
  handleChange = (event) => {
    this.setState({ [event.target.name] : event.target.value })
  }

  handleClose = () => {
    this.setState({ error: "" })
  }
  showError = err => {
    const error = err.response && err.response.data || err.message;
    this.setState({ error, isLoading: false })
  }
  handleSubmit = event => {
    const { email } = this.state;
    event.preventDefault();
    const user = {
      email,
      password: "pass"
    }    
    this.setState({ isLoading: true })
    signinUser(user)
      .then(() => Router.push('/')).catch(this.showError)          
  }
  clearState = () => {    
    if(this.state.type === "signin"){
      this.setState({ type: "signup" })
    } else {
      this.setState({ type: "signin"})
    }
  }
  render() {
    return (
      <SignInCard />
    )
  }
}

export default Signin;