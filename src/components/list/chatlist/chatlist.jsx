import './chatlist.css'
import React, { useEffect } from 'react'
import AddUser from './addUser/addUser'
import { useUserStore } from '../../../library/userStore'
import { doc, onSnapshot, getDoc} from "firebase/firestore";
import { db } from '../../../library/firebase';


const ChatList = () =>{
    const [addMode, setAddMode] = React.useState(false)
    const [chats, setChats] = React.useState([])
    const {currentUser} = useUserStore()

    useEffect(()=>{
        const unSub = onSnapshot(doc(db, "userchats", currentUser.id), 
        async(res) => {
            const items = res.data().chats
            const promises = items.map(async(item)=>{
                const userDocRef = doc(db, "users", item.receiverId)
                const userDocSnap = await getDoc(userDocRef)

                const user = userDocSnap.data()
                return {...item, user}

            })
            const chatData = await Promise.all(promises)

            setChats(chatData.sort((a,b)=>b.updatedAt - a.updatedAt))
          });
          return()=>{
            unSub()
          }
    },[currentUser.id])

    return(
        <div className="chatlist">
           <div className="search">
            <div className="searchBar">
                <img src='./search.png'/>
                <input type='text' placeholder='Search'/>
            </div>
            <img src={addMode ? './minus.png' : './plus.png'} className='add' onClick={()=> setAddMode((prev) => !prev)}/>
           </div>

        {Array.isArray(chats) && chats?.map((chat)=>(
           <div className="item" key={chat.chatId}>
            <img src={chat.user.avatar || './avatar.png'}/>
            <div className="texts">
                <span>{chat.user.username}</span>
                <p>{chat.lastMessage}</p>
            </div>
           </div>
           ))}

           
           { addMode && <AddUser/>}
        </div>
    )
}

export default ChatList