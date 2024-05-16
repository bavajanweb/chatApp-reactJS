import './chatlist.css'
import React from 'react'
import AddUser from './addUser/addUser'


const ChatList = () =>{
    const [addMode, setAddMode] = React.useState(false)

    return(
        <div className="chatlist">
           <div className="search">
            <div className="searchBar">
                <img src='./search.png'/>
                <input type='text' placeholder='Search'/>
            </div>
            <img src={addMode ? './plus.png' : './minus.png'} className='add' onClick={()=> setAddMode((prev) => !prev)}/>
           </div>

           <div className="item">
            <img src='./avatar.png'/>
            <div className="texts">
                <span>Jane Doe</span>
                <p>Hello</p>
            </div>
           </div>

           <div className="item">
            <img src='./avatar.png'/>
            <div className="texts">
                <span>Jane Doe</span>
                <p>Hello</p>
            </div>
           </div>

           <div className="item">
            <img src='./avatar.png'/>
            <div className="texts">
                <span>Jane Doe</span>
                <p>Hello</p>
            </div>
           </div>

           <div className="item">
            <img src='./avatar.png'/>
            <div className="texts">
                <span>Jane Doe</span>
                <p>Hello</p>
            </div>
           </div>

           <div className="item">
            <img src='./avatar.png'/>
            <div className="texts">
                <span>Jane Doe</span>
                <p>Hello</p>
            </div>
           </div>

           <div className="item">
            <img src='./avatar.png'/>
            <div className="texts">
                <span>Jane Doe</span>
                <p>Hello</p>
            </div>
           </div>
           { addMode && <AddUser/>}
        </div>
    )
}

export default ChatList