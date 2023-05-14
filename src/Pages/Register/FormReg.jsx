import React, { Component , useState } from 'react'
import mainPhoto from "../../img/Reg_Log_Photo.png"
import {MdEmail , MdLockOpen} from "react-icons/md"
import {AiOutlineUser} from "react-icons/ai"
import {Link} from 'react-router-dom'



const FormReg = ({handleClick}) => {

    
    
    const [email1 , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [passwordConfirm , setPasswordConfirm] = useState("")
    const [user , setUser] = useState("")
    const [isActive, setIsActive] = useState(true);

    const [emailDirty , setEmailDirty] = useState(false)
    const [passwordDirty , setPasswordDirty] = useState(false)
    const [userDirty , setUserDirty] = useState(false)
    const [passwordConfirmDirty , setPasswordConfirmDirty ] = useState(false)

    
    
    const [emailError , setEmailError] = useState("You didn't enter an email")
    const [passwordError , setPasswordError] = useState("You didn't enter an password")
    const [userError , setUserError] = useState("You didn't enter a username")
    const [passwordConfirmError , setPasswordConfirmError ] = useState("You didn't enter an password")

    const [emailGood , setEmailGood] = useState("Email is correct")
    const [passwordGood , setPasswordGood] = useState("Password is correct")
    const [userGood , setUserGood] = useState("Password is correct")
    const [passwordConfirmGood , setPasswordConfirmGood ] = useState("Your passwords match")
    
    
    const emailHandler = (e) => {
        setEmail(e.target.value)
        
        const emailCheckRegex = /\b[a-zA-Z0-9._]+@[a-z]{2,5}\.[a-z]{2,6}\b/
        let btn = document.querySelector(".reg_btn")
        if(!emailCheckRegex.test(String(e.target.value))){
            setEmailError("Email is not correct")
            
            
            if(!e.target.value){
                setEmailError("You didn't enter an email")   
            }
            if(setEmailDirty(true)){
                btn.disabled = !btn.disabled
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
    
    const passwordConfHandler = (e) => {
        setPasswordConfirm(e.target.value)
        
        const password = document.querySelector('.passwordValue')
        if(e.target.value !== password.value){
            setPasswordConfirmError("Your passwords do not match")
    
            if(!e.target.value){
                setPasswordConfirmError("You didn't enter an password")
            }
        }else{
            setPasswordConfirmError("")
        }
    }

    const userHandler = (e) => {
        setUser(e.target.value)
        const nameCheckRegex = /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/
        if(!nameCheckRegex.test(String(e.target.value))){
            setUserError("Username is not correct")
            if(!e.target.value){
                setUserError("You didn`t enter a username")
            }
        } else {
            setUserError("")
        }
    }
    
    const isValy = (e) => {
        
        let btn = document.querySelector(".reg_btn")
        btn.style.opacity = 0.3
        if((emailDirty && !emailError) && (userDirty && !userError) && (passwordDirty && !passwordError) && (passwordConfirmDirty && !passwordConfirmError)){
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
            case "user":
                setUserDirty(true)
                break
            case 'confPassword':
                setPasswordConfirmDirty(true)
                break
        } 

    }

    

    return (
    <div className="reg_container">
        <div className="reg_content">

            <div className="reg_form" data-aos="fade-down" data-aos-duration="2500">
                <div className="reg_form_header">
                    <div className="reg_form_header_label">
                        <span>Sign Up</span>
                    </div>
            
                    <div className="reg_form_header_text">
                        <span>If you already have an account register</span>
                        <span>You can <Link className='link' to="/Login">Login here !</Link></span>
                    </div>
                    </div>
            
                    <div className="reg_inputsANDbtns">

                        <div className="reg_input email">
                            <div className="email_label">
                                <MdEmail className='icon'/>
                                <span>Email</span>
                            </div>
                            
                            <input className='Email_Input' onChange={emailHandler}  onBlur={e => isValy(e)} placeholder="Enter your Email" value={email1} name='email' />
                            

                            {(emailDirty && emailError) && <div style={{color:'red'}}>{emailError}</div>}
                            {(emailDirty && !emailError) && <div style={{color:'green'}}>{emailGood}</div>}

                        </div>
                        
                        <div className="reg_input username">
                            <div className="user_label">
                                <AiOutlineUser className='icon'/>
                                <span>Username</span>
                            </div>
                            <input className='User_Input' onChange={userHandler} onBlur={e => isValy(e)} type="text" placeholder="Enter your Username" value={user} name='user' id='name'/>
                            
                            {(userDirty && userError) && <div style={{color:'red'}}>{userError}</div>}
                            {(userDirty && !userError) && <div style={{color:'green'}}>{userGood}</div>}

                        </div>

                        <div className="reg_input password">
                            <div className="password_label">
                                <MdLockOpen className='icon'/>
                                <span>Password</span>
                            </div>

                            <input onChange={passwordHandler} className='passwordValue Password_Input' onBlur={e => isValy(e)} placeholder="Enter your Password" value={password} name='password' type='password' />
                            

                            {(passwordDirty && passwordError) && <div style={{color:'red'}}>{passwordError}</div>}
                            {(passwordDirty && !passwordError) && <div style={{color:'green'}}>{passwordGood}</div>}
                        
                        </div>
                        
                        <div className="reg_input password ">
                            <div className="password_label">
                                <MdLockOpen className='icon'/>
                                <span>Password Confrim</span>
                            </div>
                            <input className='Confirm_Input' type="password" value={passwordConfirm} onChange={passwordConfHandler} onBlur={e => isValy(e)} name='confPassword' placeholder="Confrim your Password"/>

                            {(passwordConfirmDirty && passwordConfirmError) && <div style={{color:'red'}}>{passwordConfirmError}</div>}
                            {(passwordConfirmDirty && password && !passwordConfirmError) && <div style={{color:'green'}}>{passwordConfirmGood}</div>}
                        </div>

                       
            
                        <button  type='submit' className="reg_btn" onClick={() => handleClick(email1, password , user.value)} disabled={isActive}>
                            <span>Register</span>
                        </button>
            
                       
            
                    </div>
                </div>
            
                <div className="reg_photo">
            
                    <div className="reg_photo_container" >
            
                    <img src={mainPhoto} loading="lazy" alt="" data-aos="fade-left" data-aos-duration="3000"/>
            
                    <div className="reg_photo_text"  data-aos="fade-right" data-aos-duration="3000">
                        <span className="reg_photo_text_heading">Sign Up to <span className='Figma'>Figma</span><span className='Land'>Land</span></span>
                        <span className="reg_photo_text_label">Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.</span>
                    </div>
            
                </div>
            </div>
        </div>
    </div>
    )
    
  }

  export {FormReg};