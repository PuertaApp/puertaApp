// useEffect is the hook version of ComponentDidMount, which we're using to register our service worker.
// https://medium.com/@felippenardi/how-to-do-componentdidmount-with-react-hooks-553ba39d1571 
import React, { useState, useEffect } from "react";

// getting the URL we're running
import absoluteUrl from 'next-absolute-url'
// prod comment
// these are our authentication functions, which take care of grabbing the user object from either the server
// or the client (where we store it on the window)
import { getSessionFromClient, getSessionFromServer, redirectUser } from '../lib/auth'

// icon test 
import AtomIcon from '../components/icons/AtomIcon'
// end icon test 
import Layout from '../components/Layout';
import StoryList from '../components/StoryList'

require('isomorphic-fetch');

const Index = ({ req, classes, auth, houses, userData }) => {
  return (
    <main >
      {auth.user && auth.user._id ? (
        // Auth User Page
        <div>
          <AtomIcon height={"24px"} width={"24px"} fill={"#000"}/>
          Auth user page
          {
            houses && <Layout title={'Hacker News Reader'} 
            description={'A sample PWA built with React and Next.JS'}>
              <StoryList houses={houses} />
            </Layout>
          }  
          {/* Verifying we can talk to the MongoDB */}
          Users 
          {userData.length}    
        </div>
      ) : (
        // Splash Page (UnAuth Page)
        <div>
          Un Auth page, splash page
        </div>
      )}
    </main>
  )
}

Index.getInitialProps = async function({req, res, query: { userId }}) {
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
  return { auth, userId, houses, userData };
};

export default Index;
