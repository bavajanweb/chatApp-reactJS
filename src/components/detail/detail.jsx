import { auth } from '../../library/firebase'
import './detail.css'

const Detail = () =>{
    return(
        <div className="detail">
            <div className="user">
                <img src='./avatar.png'/>
                <h2>Jane Doe</h2>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="info">
                <div className="option">
                    <div className="title">
                        <span>Chat Settings</span>
                        <img src='./arrowUp.png'/>
                    </div>
                </div>

                <div className="option">
                    <div className="title">
                        <span>Privacy % help</span>
                        <img src='./arrowUp.png'/>
                    </div>
                </div>

                <div className="option">
                    <div className="title">
                        <span>Shared photos</span>
                        <img src='./arrowDown.png'/>
                    </div>

                    <div className="photos">
                        <div className="photoItem">
                            <img src='./photo.jpg'/>
                            <span>photo_2024.jpg</span>
                            <img src='./download.png' className='download'/>
                        </div>
                        
                    </div>

                    <div className="photos">
                        <div className="photoItem">
                            <img src='./photo.jpg'/>
                            <span>photo_2024.jpg</span>
                            <img src='./download.png' className='download'/>
                        </div>
                    </div>

                    <div className="photos">
                        <div className="photoItem">
                            <img src='./photo.jpg'/>
                            <span>photo_2024.jpg</span>
                            <img src='./download.png' className='download'/>
                        </div>
                        
                    </div>

                    <div className="photos">
                        <div className="photoItem">
                            <img src='./photo.jpg'/>
                            <span>photo_2024.jpg</span>
                            <img src='./download.png' className='download'/>
                        </div>
                    </div>
                </div>

                <div className="option">
                    <div className="title">
                        <span>Shared Files</span>
                        <img src='./arrowUp.png'/>
                    </div>
                </div>

                <button>Block User</button>
                <button className='logOut' onClick={() =>auth.signOut()}>Logout</button>
            </div>
        </div>
    )
}

export default Detail