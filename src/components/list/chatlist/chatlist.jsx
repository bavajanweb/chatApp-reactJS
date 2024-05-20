import './chatlist.css'
import React, { useEffect } from 'react'
import AddUser from './addUser/addUser'
import { useUserStore } from '../../../library/userStore'
import { doc, onSnapshot } from "firebase/firestore";
import { db } from '../../../library/firebase';


const ChatList = () =>{
    const [addMode, setAddMode] = React.useState(false)
    const [chats, setChats] = React.useState([])
    const {currentUser} = useUserStore()

    useEffect(()=>{
        const unSub = onSnapshot(doc(db, "userchats", currentUser.id), (doc) => {
            setChats(doc.data());
          });
          return()=>{
            unSub()
          }
    },[currentUser.id])
    console.log(chats)
    return(
        <div className="chatlist">
           <div className="search">
            <div className="searchBar">
                <img src='./search.png'/>
                <input type='text' placeholder='Search'/>
            </div>
            <img src={addMode ? './plus.png' : './minus.png'} className='add' onClick={()=> setAddMode((prev) => !prev)}/>
           </div>

        {chats.map((chat)=>(
           <div className="item" key={chat.chatId}>
            <img src='./avatar.png'/>
            <div className="texts">
                <span>Jane Doe</span>
                <p>{chat.lastMessage}</p>
            </div>
           </div>
           ))}

           
           { addMode && <AddUser/>}
        </div>
    )
}

export default ChatList