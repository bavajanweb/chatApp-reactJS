import './chat.css'

const Chat = () =>{
    return(
        <div className="chat">
            <div className="top">
                <div className="user">
                    <img src='./avatar.png'/>
                    <div className="texts">
                        <span>Jane Doe</span>
                        <p>this is discription</p>
                    </div>
                </div>
                <div className="icons">
                    <img src='./phone.png'/>
                    <img src='./video.png'/>
                    <img src='./info.png'/>
                </div>
            </div>

            <div className="center">

            </div>

            <div className="bottom">
                <div className="icons">
                    <img src='./img.png'/>
                    <img src='./camera.png'/>
                    <img src='./mic.png'/>
                </div>
                <input type='text' placeholder='Type a Message...'/>
                <div className="emoji">
                    <img src='./emoji.png'/>
                </div>
                <button className='sendButton'>Send</button>
            </div>
        </div>
    )
}

export default Chat