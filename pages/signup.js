import styled from 'styled-components'
import FloatingSearchForm from '../components/styles/FloatingSearchForm'
import { signupUser } from '../lib/auth';

class Signup extends React.Component {
  state = {
    name: "",
    email: "",
    error: "",
    createdUser: "",
    success: "",
    isLoading: false,
  };
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
    const { name, email } = this.state;
    event.preventDefault();
    const user = {
      name, 
      email,
      password: "pass"
    }    
    this.setState({ isLoading: true })
    signupUser(user)
      .then(createdUser => {
        this.setState({
          createdUser,
          error: "",
          success: "You're signed up! Great job :)",
          isLoading: false,
        })
      }).catch(this.showError)          
  }
  render() {
    return (
      <FloatingSearchForm>
        <div class="search-form">
            <h1>Sign up for the app</h1>
            <form onSubmit={this.handleSubmit} action="#">
                <div class="field">
                    <label>Name</label>
                    <input name="name" type="text" onChange={this.handleChange}/>
                </div>
                <div class="field">
                    <label>Email</label>
                    <input name="email" type="email" onChange={this.handleChange}/>
                </div>                
                <div class="submit">
                    <input disabled={this.state.isLoading} type="submit" class="submitBtn" value={this.state.isLoading ? "Signing up" : "Sign up"}/>
                </div>
            </form>
            {/* Error Message */}
            <div
              onClick={this.handleClose}
            >
              {this.state.error} 
              {this.state.success}
            </div>
        </div>
      </FloatingSearchForm> 
    )
  }
}


export default Signup;