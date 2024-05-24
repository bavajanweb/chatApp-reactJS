import './chat.css'
import EmojiPicker from 'emoji-picker-react'
import { onSnapshot, doc } from 'firebase/firestore'
import React, { useEffect, useRef } from 'react'
import { db } from '../../library/firebase'
import { useChatStore } from '../../library/chatStore'

const Chat = () => {

    const [open, setOpen] = React.useState(false)
    const [text, setText] = React.useState("")
    const [chat, setChat] = React.useState()
    const {chatId} = useChatStore()

    const endRef = useRef(null)

    useEffect(()=>{
        endRef.current?.scrollIntoView({behavior: "smooth"})
    },[])

    useEffect(()=>{
        const unSub = onSnapshot(doc(db,"chats", chatId
        ),(res)=>{
            setChat(res.data())
        })
        return () =>{
            unSub()
        }
    },[chatId])

    console.log(chat)

    const emojiHandle = (e) => {
        setText((prev) => prev + e.emoji)
        setOpen(false)
    }
    return (
        <div className="chat">
            <div className="top">
                <div className="user">
                    <img src='./avatar.png' />
                    <div className="texts">
                        <span>Jane Doe</span>
                        <p>this is discription</p>
                    </div>
                </div>
                <div className="icons">
                    <img src='./phone.png' />
                    <img src='./video.png' />
                    <img src='./info.png' />
                </div>
            </div>

            <div className="center">
                <div className="message">
                    <img src='./avatar.png' />
                    <div className="texts">
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi voluptatum omnis, modi iure fuga culpa dolores ad soluta aliquam optio.
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>

                <div className="message own">
                    <div className="texts">
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi voluptatum omnis, modi iure fuga culpa dolores ad soluta aliquam optio.
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>


                <div className="message">
                    <img src='./avatar.png' />
                    <div className="texts">
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi voluptatum omnis, modi iure fuga culpa dolores ad soluta aliquam optio.
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>

                <div className="message own">
                    <div className="texts">
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi voluptatum omnis, modi iure fuga culpa dolores ad soluta aliquam optio.
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>

                <div className="message">
                    <img src='./avatar.png' />
                    <div className="texts">
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi voluptatum omnis, modi iure fuga culpa dolores ad soluta aliquam optio.
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>

                <div className="message own">
                    <div className="texts">
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi voluptatum omnis, modi iure fuga culpa dolores ad soluta aliquam optio.
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>

                <div ref={endRef}></div>
            </div>

            <div className="bottom">
                <div className="icons">
                    <img src='./img.png' />
                    <img src='./camera.png' />
                    <img src='./mic.png' />
                </div>
                <input type='text' placeholder='Type a Message...' onChange={(e) => setText(e.target.value)} value={text} />
                <div className="emoji">
                    <img src='./emoji.png' onClick={() => setOpen(prev => !prev)} />
                    <div className="emojiPicker">
                        <EmojiPicker open={open} onEmojiClick={emojiHandle} />
                    </div>

                </div>
                <button className='sendButton'>Send</button>
            </div>
        </div>
    )
}

export default Chat