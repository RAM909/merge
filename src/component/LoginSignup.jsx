import React, { useState } from 'react'
import './LoginSignup.css'
import user_icon from '../Assests/person.png'
import email_icon from '../Assests/email.png'
import pass_icon from '../Assests/password.png'
import video from '../Assests/sea.mp4'

export const LoginSignup = () => {


    const [action,setAction] = useState("Login");
  return (
// //   <div className="main"> 
//     <video src={video} autoplay loop muted/>
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action==="Login"?<div></div>:<div className="input">
                <img src={user_icon} alt="" />
                <input type="text" placeholder='Name' />
            </div>}
            
            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" placeholder='Email-Id'/>
            </div>
            <div className="input">
                <img src={pass_icon} alt="" />
                <input type="password" placeholder='Password' />
            </div>
        </div>
        {action==="Sign Up"?<div></div>: <div className="lostpassword">Lost Password? <span>Click here!</span></div>}
       
        <div className="submit-container">
         <div className={action==="Login"?"submit gray":"submit"} onClick={() => {setAction("Sign Up")}}>Sign up</div>
         <div className={action==="Sign Up"?"submit gray":"submit"} onClick={() => {setAction("Login")}}>Login</div>
        </div>

    
    </div>
//    </div> 
  )
}
