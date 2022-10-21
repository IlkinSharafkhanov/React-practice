import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import "./index.scss"

const LogIn = () => {

const [userName, setUserName] = useState("")
const [password, setPassword] = useState("")
const navigate = useNavigate();

const logInUser = () => {
    axios.post("http://localhost:9000/login",{
        user: userName,
        password: password,
    }).then((res) => {
        if(userName === "ilkinsharafkhan" && password === "almaarmud"){
        localStorage.setItem("token", res.data.token)
        navigate("/table")
        }else{
            alert("Access denied!")
        }
    })
}

const userNameChecker = (e) => {
    setUserName(e.target.value)
}

const passwordChecker = (e) => {
    setPassword(e.target.value)
}

  return (
    <div className='content'>
        <input type="text" className='email' placeholder='Email' onChange={userNameChecker}/>
        <input type="password" className='password' placeholder='Password' onChange={passwordChecker}/>
        <input type="submit" onClick={logInUser}/>
    </div>
  )
}

export default LogIn