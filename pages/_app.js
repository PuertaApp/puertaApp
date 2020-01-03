import React, { Fragment } from 'react';
import App, { Container } from 'next/app';
import { register, unregister } from 'next-offline/runtime';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import Meta from '../components/Meta';

//Example theme for the styledcomponents themeprovider
const theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};
const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: 'Fira Sans', sans-serif;    
    }
    html {
      box-sizing: border-box;
    }
    *, *:before, *:after {
      box-sizing: inherit;
    }
    body {
      padding: 0;
      margin: 0;
      font-family: 'Fira Sans', sans-serif; 
      background-color: #F9f9f9;
      width: auto!important; 
      overflow-x: hidden!important;
    }
    body.active {
      overflow: hidden;
    }
    a {
      text-decoration: none;
      color: ${theme.black};
    }
    button {  font-family: 'Fira Sans', sans-serif;  }
  body {
    .pac-container {
      z-index: 1051 !important;
    }
    .modal {
      background: rgba(0, 0, 0, 0.4);
    }  
  }
`

export class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }
	// runtime registration for the service worker, functions provided by next-offline
  componentDidMount() {
    register();
  }

  componentWillUnmount() {
    unregister();
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>        
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Meta />  
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    );
  }
}


export default MyApp;