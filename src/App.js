import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route,Link
} from 'react-router-dom';
import styled from 'styled-components'
import Header from "./components/Header"
import Chat from './components/Chat';
import Sidebar from './components/Sidebar';
import {useAuthState}  from 'react-firebase-hooks/auth'
import {auth} from "./firebase"
import Login from './components/Login';
import "./App.css"
import LoginUI from './components/login/LoginUI';
// import Spinner from 'react-spinkit/dist/spinners';
var Spinner = require('react-spinkit')
function App() {
  const [user, loading]= useAuthState(auth);
    if(loading){
      return(
        <>
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png?20160618190853"
        alt="" className='spinImage'/>
    <Spinner name="line-scale"
    color='red' className='Spinner'/>
    </>
      )
  }
  return (
    <div className="App"> 
      <Router>
        {!user ? 
        <LoginUI/> : (
            <>
          <Header/>
      <AppBody>
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<Chat/>}>
        </Route>
      </Routes>

      </AppBody>
      </>
      )}
        </Router>
    </div>

    
  );
}

export default App;
const AppBody = styled.div`
display: flex;
height: 100vh;
`;

