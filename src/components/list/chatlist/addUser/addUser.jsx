import './addUser.css'


const AddUser = () =>{
    return(
        <div className="addUser">
        <forn>
            <input type='text' placeholder='search'/>
            <button>Search</button>
        </forn>
        <div className="user">
            <div className="detail">
                <img img='./pic.jpg'/>
                <span>John Doe</span>  
            </div>
            <button>Add User</button>
        </div>
        </div>
    )
}

export default AddUser