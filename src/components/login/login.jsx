import { useState } from 'react'
import './login.css'
import { toast } from 'react-toastify'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../../library/firebase'





const Login = () => {

    const [avatar, setAvatar] = useState({
        file: null,
        url: ""
    })

    const handAvatar = e => {
        if (e.target.files[0]) {
            setAvatar({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0])
            })
        }

    }

    const handleRegister = async (e) => {
        
        e.preventDefault()
        const formData = new FormData(e.target)
        const { username, email, password } = Object.fromEntries(formData)
        try {

            const res = await createUserWithEmailAndPassword(auth,email,password)
            
        } catch (err) {
            console.log(err)
            toast.error(err.message)
            
        }
        
    }



    const handleLogin = e =>{
        e.preventDefault()
    }
    return (
        <div className="login">
            <div className="item">
                <h2>Welcome back,</h2>
                <form >
                    <input type='text' placeholder='Email' name='email' />
                    <input type='text' placeholder='password' name='password' />
                    <button>Sign In</button>
                </form>
            </div>
            <div className="seprator"></div>
            <div className="item">
                <h2>Create a account</h2>
                <form onSubmit={handleRegister}>
                    <label htmlFor="file">
                        <img src={avatar.url || './avatar.png'} /> Upload Image</label>
                    <input type='file' id='file' style={{ display: "none" }} onChange={handAvatar} />
                    <input type='text' placeholder='Username' name='username' />
                    <input type='text' placeholder='Email' name='email' />
                    <input type='text' placeholder='password' name='password' />
                    <button>Sign Up</button>
                </form>
            </div>

        </div>
    )
}

export default Login