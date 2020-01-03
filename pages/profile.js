// useEffect is the hook version of ComponentDidMount, which we're using to register our service worker.
// https://medium.com/@felippenardi/how-to-do-componentdidmount-with-react-hooks-553ba39d1571 
import React, { useState, useEffect } from "react";
import { AgentNav, PropRepNav, BuyerNav } from '../components/nav'
// getting the URL we're running
import absoluteUrl from 'next-absolute-url'
// and for prod
// for dev
// these are our authentication functions, which take care of grabbing the user object from either the server
// or the client (where we store it on the window)
import { getSessionFromClient, getSessionFromServer, redirectUser } from '../lib/auth'

import Profile from '../components/Profile'

require('isomorphic-fetch');

const ProfilePage = ({ req, classes, auth, houses, userData, user }) => {
  console.log(user)
  return (
    <main >
      {auth.user && auth.user._id ? (
        // Auth User Page
        <div>          
          <Profile />
          
          {/* Verifying we can talk to the MongoDB */} 
        </div>
      ) : (
        // Splash Page (UnAuth Page)
        <div>
          Un Auth page, splash page
        </div>
      )}
      {user.role == 'buyer' ? <BuyerNav/>: null}
      {user.role == 'agent' ? <AgentNav/>: null}
      {user.role == 'rep' ? <PropRepNav/>: null}
    </main>
  )
}

ProfilePage.getInitialProps = async function({req, res, query: { userId }}) {
  // 1) getting the auth and ensuring it's populated as props
  const auth = req ? getSessionFromServer(req) : getSessionFromClient();
  const currentPath = req ? req.url : window.location.pathname;
  const user = auth.user;
  const isAnonymous = !user;
  // getting the url we're running 
  const { origin } = absoluteUrl(req)

  // getting the stories from hacker news to seed our app
  let houses
  let users
  // PROTECTED ROUTES //  
  if (true && isAnonymous && currentPath !== "/signin") {
    return redirectUser(res, "/signin");
  }
  // ^^ PROTECTED ROUTES ^^ //
  try {        
    console.log('before fetch')
    let data;
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
      // dev code
      data = await fetch('http://localhost:3000/api/data')  
    } else {
      // production code
      data = await fetch(`${origin}/api/data`)  
    }
      
    houses = await data.json()    
    console.log('after await')
    console.log(houses)
  } catch(e){
    console.log(e)
    houses = undefined
  }
  let userData;
  try {    
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
      // dev code
      userData = await fetch('http://localhost:3000/api/users')  
    } else {
      // production code
      userData = await fetch(`${origin}/api/users`)  
    }
    userData = await userData.json();
  } catch(e) {
    console.log(e)
    userData = undefined 
  }
  return { auth, userId, houses, userData, user };
};

export default ProfilePage;
