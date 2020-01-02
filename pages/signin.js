import styled from 'styled-components'
import FloatingSearchForm from '../components/styles/FloatingSearchForm'
import Button from '../components/Button'
import { signinUser } from '../lib/auth';
import Router from 'next/router';

class Signin extends React.Component {
  state = {
    email: "",
    error: "",
    success: "",
    isLoading: false,
    type: ""
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
    console.log(this.state)
    this.setState({ type: "" })
  }
  render() {
    if(this.state.type === "") {
      return (
        <FloatingSearchForm>
          <div class="search-form">
              <Button 
                text="Sign in" 
                onClick={() => {
                  this.setState({ type: "signin"})
                }}
                clearState={this.clearState}
              />
              <Button 
                text="Sign up" 
                onClick={() => {                  
                  this.setState({ type: "signup"})
                }}
                clearState={this.clearState}
              />
          </div>
        </FloatingSearchForm> 
      )
    } else if (this.state.type === "signin") {
      return (
        <div>
          Signin form
          <button onClick={this.clearState}>Back</button>
        </div>
      )
    } else {
      return (
        <div>
          Signup form
          <button onClick={this.clearState}>Back</button>
        </div>
      )
    }
    
  }
}


export default Signin;