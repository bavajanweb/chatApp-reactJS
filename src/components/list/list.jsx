import './list.css'
import ChatList from './chatlist/chatlist'
import UserInfo from './userinfo/userinfo'

const List = () => {
    return(
        <div className="list">
            <h1>List</h1>
            <UserInfo/>
            <ChatList/>
            
        </div>
    )
}

export default List