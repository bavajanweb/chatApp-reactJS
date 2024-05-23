
import { useEffect, useState } from 'react';
import './App.css';
import Chat from './components/chat/chat';
import Detail from './components/detail/detail';
import List from './components/list/list';
import Login from './components/login/login';
import Notification from './components/notification/notification';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './library/firebase';
import { useUserStore } from './library/userStore';


function App() {

  const {fetchUserInfo, currentUser, isLoading } = useUserStore()

useEffect(()=>{
  const unSub = onAuthStateChanged(auth,(user)=>{
    fetchUserInfo(user?.uid)
  })
  return () =>{
    unSub()
  }
},[fetchUserInfo])


if(isLoading) return <div className='loading'>Loading...</div>


  return (
    <div className="container">
      {currentUser ? (<>
      <List/>
     <Chat/>
     <Detail/>
     </>) : (<Login/>)}

      <Notification/>
    </div>
  );
}

export default App;
