// useEffect is the hook version of ComponentDidMount, which we're using to register our service worker.
// https://medium.com/@felippenardi/how-to-do-componentdidmount-with-react-hooks-553ba39d1571 
import React, { useState, useEffect } from "react";
// these are our authentication functions, which take care of grabbing the user object from either the server
// or the client (where we store it on the window)
import { getSessionFromClient, getSessionFromServer, redirectUser } from '../lib/auth'

import Layout from '../components/Layout';
import StoryList from '../components/StoryList'

require('isomorphic-fetch');

const Index = ({ classes, auth, stories }) => {
  return (
    <main >
      {auth.user && auth.user._id ? (
        // Auth User Page
        <div>
          Auth user page
          {
            stories && <Layout title={'Hacker News Reader'} 
            description={'A sample PWA built with React and Next.JS'}>
              <StoryList stories={stories} />
            </Layout>
          }
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
// Issues
// 1 - use a hook to get the data for the stories 
// 2 - DONE ensure you're mounting the service worker (used component did mount)

// Index.getInitialProps = authInitialProps();
Index.getInitialProps = async function({req, res, query: { userId }}) {
  // getting the auth and ensuring it's populated as props
  const auth = req ? getSessionFromServer(req) : getSessionFromClient();
  const currentPath = req ? req.url : window.location.pathname;
  const user = auth.user;
  const isAnonymous = !user;
  // getting the stories from hacker news to seed our app
  let stories
  if (true && isAnonymous && currentPath !== "/signin") {
    return redirectUser(res, "/signin");
  }
  try {
    const req = await fetch(`https://node-hnapi.herokuapp.com/news?page=1`)
    stories = await req.json()    
  } catch(e){
    stories = undefined
  }
  return { auth, userId, stories };
};

export default Index;
