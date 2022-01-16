import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {login, selectUser} from './features/userSlice';
import {auth} from './firebase';

import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
// import Post from './components/Post';
import Login from './components/Login';
import Widgets from './components/Widgets'


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          dispalyName: userAuth.user.displayName,
          photoUrl: userAuth.user.photoURL
        }))
      }
    })
  })

  return (
    <div className="App">
      <Header />
      {!user ? (<Login />) : (<div className="app__body">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
      )}
    </div>
  );
}

export default App;
