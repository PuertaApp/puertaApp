import styled from 'styled-components'
import FloatingSearchForm from '../components/styles/FloatingSearchForm'
import Button from '../components/Button'
import { signinUser } from '../lib/auth';
import Router from 'next/router';
import SignUpCard from '../components/SignUpCard';

class Signup extends React.Component {
  state = {
    email: "",
    error: "",
    success: "",
    isLoading: false,
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
  render() {
    return (
      <SignUpCard />
    )
  }
}

export default Signup;