import React from "react";
import logo from "../../img/logo.png"
import {Link} from 'react-router-dom'
import {useAuth} from "../../hooks/use-auth"
import { useDispatch ,  } from "react-redux";
import { signOut , getAuth } from "firebase/auth";
import {removeUser , } from "../../store/slices/userSlice"
import {CiLogin} from "react-icons/ci"
const Header = () => {
    
    const {displayName} = useAuth();
    
    
    
    const dispatch = useDispatch();
    
  
    const handleLogout = () => {
      const auth = getAuth();
      
      signOut(auth)
        .then(() => {
          sessionStorage.removeItem("token")
          sessionStorage.removeItem("email")
          sessionStorage.removeItem("name")
          dispatch(removeUser());
        })
        .catch(console.error);
    };
    
    const scrolltoProduct = () => {
        let product = document.querySelector(".Contents_Container")
        product.scrollIntoView({behavior: "smooth" , block:"center"})
    }

    const scrolltoContact = () => {
        let Contact = document.querySelector(".Footer_Content")
        Contact.scrollIntoView({behavior: "smooth" , block:"center"})
    }

    const scrolltoAbout = () => {
        let about = document.querySelector(".Feature_Container")
        about.scrollIntoView({behavior : "smooth" , block: "end"})
    }

    const handleClick = () => {
        let div = document.querySelector('.media_nav')
        let hamburger = document.querySelector(".hamburger");
        hamburger.classList.toggle("is-active");

        div.classList.toggle('active')
        if (div.classList.contains('active')) {
            div.style.display = 'flex'
            div.style.animation = "start 1.5s"
        } else {
            div.style.animation = "end 1.5s"
            setTimeout(() => {
                div.style.display = "none"
            }, 1500)
        }
    }

    return(
        <div className="Header_Container">
            <div className="Header_Content">
                <div className="Header_Logo" >
                    <img  src={logo}/>
                    
                </div>

                <div className="Header_Nav main_nav">
                    <nav>
                        <ul>
                            <li><Link className="Header_li_elem main_li">Home</Link></li>
                            <li><a onClick={scrolltoProduct} className="Header_li_elem main_li">Product</a></li>
                            <li><a onClick={scrolltoAbout} className="Header_li_elem main_li">About</a></li>
                            <li><a onClick={scrolltoContact} className="Header_li_elem main_li">Contact</a></li>
                        </ul>
                    </nav>
                </div>

                
                <div className="Header_Btn">
                    <div>Welcome <span><Link to="/UserProfile">{displayName}</Link></span></div>
                    <CiLogin className="Log_Out" onClick={handleLogout}></CiLogin>
                </div>

                

                <div className="Header_Btn_Nav_Container">
                    <button onClick={handleClick} className="hamburger hamburger--collapse" type="button">
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </button>

                    <div className="Header_Nav media_nav">
                        <nav>
                            <ul>
                                <li><a className="Header_li_elem media_li">Home</a></li>
                                <li><a className="Header_li_elem media_li">Product</a></li>
                                <li><a className="Header_li_elem media_li">About</a></li>
                                <li><a className="Header_li_elem media_li">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                    
            </div>
        </div>
    )
}

export default Header;