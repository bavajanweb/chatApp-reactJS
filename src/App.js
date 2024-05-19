
import { useEffect, useState } from 'react';
import './App.css';
import Chat from './components/chat/chat';
import Detail from './components/detail/detail';
import List from './components/list/list';
import Login from './components/login/login';
import Notification from './components/notification/notification';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './library/firebase';


function App() {

  const user = false

useEffect(()=>{
  const unSub = onAuthStateChanged(auth,(user)=>{
    console.log(user)
  })
  return () =>{
    unSub()
  }
},[])

  return (
    <div className="container">
      {user ? (<>
      <List/>
     <Chat/>
     <Detail/>
     </>) : (<Login/>)}

      <Notification/>
    </div>
  );
}

export default App;
