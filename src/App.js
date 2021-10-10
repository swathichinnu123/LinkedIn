//import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed.js';
import { login, logout, selectuser } from './features/UserSlice';
import { useDispatch, useSelector } from 'react-redux';
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import Widgets from './Widgets';
import Footer from './Footer';




function App() {

  const user = useSelector(selectuser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(function(user) {
      if(user) {
        dispatch(login({
          email: user.email,
          uid: user.uid,
          displayName: user.name,
          photoURL: user.profilePic,
      }));

      }
      else {
        dispatch(logout());
      }
    })
  },[]);
  



  return (
    <div className="app">

      { /* Header */ }
      <Header />

      {!user ? ( 
      <Login /> ) : (
      <div className="app_body">
        <Sidebar />
        <Feed />
        <Widgets/>
      </div>
      )}
      
      <Footer />

      
    </div>
  );
}

export default App;
