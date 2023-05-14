import React, { Component, useState } from 'react'
import mainPhoto from "../../img/Reg_Log_Photo.png"
import {MdEmail , MdLockOpen} from "react-icons/md"
import {Link} from 'react-router-dom'

const FormAuth = ({handleLogin}) => {
    
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [isActive, setIsActive] = useState(true);

    const [emailDirty , setEmailDirty] = useState(false)
    const [passwordDirty , setPasswordDirty] = useState(false)

    const [emailError , setEmailError] = useState("You didn't enter an email")
    const [passwordError , setPasswordError] = useState("You didn't enter an password")

    const [emailGood , setEmailGood] = useState("Email is correct")
    const [passwordGood , setPasswordGood] = useState("Password is correct")
    
    const emailHandler = (e) => {
        setEmail(e.target.value)
        const emailCheckRegex = /\b[a-zA-Z0-9._]+@[a-z]{2,5}\.[a-z]{2,6}\b/
        if(!emailCheckRegex.test(String(e.target.value))){
            setEmailError("Email is not correct")
            if(!e.target.value){
                setEmailError("You didn't enter an email")
            }
        }else{
            setEmailError("")
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
        const passwordCheckRegex = /^[A-Za-z]\w{7,14}$/
        if(!passwordCheckRegex.test(String(e.target.value))){
            setPasswordError("Password is not correct")
            if(!e.target.value){
                setPasswordError("You didn't enter an password")
            }
        }else{
            setPasswordError("")
        }
    }

    const isValy = (e) => {

        let btn = document.querySelector(".log_btn")
        btn.style.opacity = 0.3
        
        if((emailDirty && !emailError) && (passwordDirty && !passwordError)){
            btn.style.opacity = 1
            setIsActive(false);

        } else {
            setIsActive(true);
        }

        switch(e.target.name){
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
        }
    }

    


    return (
    <div className="log_container">
        <div className="log_content">

            <div className="log_form" data-aos="fade-down" data-aos-duration="2500">
                <div className="log_form_header">
                    <div className="log_form_header_label">
                        <span>Sign In</span>
                    </div>
                    <div className='ErrorFirebase'>
                        
                    </div>
                    <div className="log_form_header_text">
                        <span>If you don’t have an account register</span>
                        <span>You can <Link className='link' to="/Register">Register here !</Link></span>
                    </div>
                    </div>
            
                    <div className="log_inputsANDbtns">

                        <div className="log_input email">
                            <div className="email_label">
                                <MdEmail className='icon'/>
                                <span>Email</span>
                            </div>
                            
                            <input onChange={emailHandler} onBlur={e => isValy(e)} placeholder="Enter your Email" name='email' value={email} />
                            

                            {(emailDirty && emailError) && <div style={{color:'red'}}>{emailError}</div>}
                            {(emailDirty && !emailError) && <div style={{color:'green'}}>{emailGood}</div>}

                        </div>
            
                        <div className="log_input password">
                            <div className="password_label">
                                <MdLockOpen className='icon'/>
                                <span>Password</span>
                            </div>

                            <input onChange={passwordHandler} onBlur={e => isValy(e)} placeholder="Enter your Password" name='password' type='password' value={password} />
                            

                            {(passwordDirty && passwordError) && <div style={{color:'red'}}>{passwordError}</div>}
                            {(passwordDirty && !passwordError) && <div style={{color:'green'}}>{passwordGood}</div>}
                        
                        </div>

                        
                        
            
                        <button  className="log_btn form_btn" onClick={() => handleLogin(email , password)} disabled={isActive}>
                            <span >Login</span>
                        </button>
            
            
                    </div>
                </div>
            
                <div className="log_photo">
            
                    <div className="log_photo_container" >
            
                    <img src={mainPhoto} loading="lazy" alt="" data-aos="fade-left" data-aos-duration="3000"/>
            
                    <div className="log_photo_text"  data-aos="fade-right" data-aos-duration="3000">
                        <span className="log_photo_text_heading">Sign In to <span className='Figma'>Figma</span><span className='Land'>Land</span></span>
                        <span className="log_photo_text_label">Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.</span>
                    </div>
            
                </div>
            </div>
        </div>
    </div>
    )
    
  }

  export {FormAuth};