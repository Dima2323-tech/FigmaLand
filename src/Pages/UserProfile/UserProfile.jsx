import { useEffect, useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {removeUser } from "../../store/slices/userSlice"
import {AiFillInfoCircle} from "react-icons/ai"
import MaskedInput from "react-text-mask"
import avatar from "../../img/avatar.jpg"
import { useAuth } from "../../hooks/use-auth"

import { getDatabase, ref, set , get} from "firebase/database";
import { signOut , getAuth } from "firebase/auth";



const UserProfile = () => {

  const {  email, displayName, id ,  } = useAuth();
  const dispatch = useDispatch();
  const push = useNavigate();
  
  const handleLogout = () => {
    const auth = getAuth();
    
    signOut(auth)
      .then(() => {
        sessionStorage.removeItem("token")
        sessionStorage.removeItem("email")
        dispatch(removeUser());
        push("/login")
      })
      .catch(console.error);
  };
 

  const writeUserData = (e) => {
    e.preventDefault();
    if (!isDataChanged) {
      return; // данные не изменились, ничего не делаем
    }
    const db = getDatabase();
    const userRef = ref(db, 'users/' + id);
    get(userRef).then((snapshot) => {
      const userData = snapshot.val();
      const updatedUserData = {
        name: name || userData.name,
        surname: surname || userData.surname,
        email: email || userData.email,
        phone: phone || userData.phone,
      };
      set(userRef, updatedUserData).then(() => {
        setUserData(updatedUserData);
        setIsDataChanged(false); // сбрасываем флаг изменения данных
        setIsActive(true)

        const [email, name, surname, phone] = Array.from(document.querySelectorAll(".Email, .Name, .Surname, .Phone"));
        [email, name, surname, phone].forEach((field) => (field.disabled = true));
        
        const messsageContainer = document.querySelector(".ProccesLabel")
        const message = document.querySelector(".ProccesLabel_Message")
        
        message.innerHTML = "Successfully"
        messsageContainer.style.animation = "start 1.5s"
        messsageContainer.style.display = "flex"
        
        setTimeout(() => {
            messsageContainer.style.animation = "end 3s"
            const animationName = window.getComputedStyle(messsageContainer).animationName;
            if(animationName){
              setTimeout(() => {
                messsageContainer.style.display = "none"
              } , 3000)
              
            }
          } , 4000 );
      }).catch((error) => {
        console.log(error);
      });
    }).catch((error) => {
      console.log(error)
    });
    
  };
  
  const database = getDatabase();
  const userRef = ref(database, 'users/' + id);


  get(userRef).then((snapshot) => {
    if(snapshot.exists()){
        const userData = snapshot.val();
        setUserData(userData)
    }
  }).catch((error) => {
    console.log(error)
  })

  const [userData , setUserData] = useState({})
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone , setPhone] = useState("");
  const [isActive, setIsActive] = useState(true);
  
  
  // добавляем обработчики изменения полей, чтобы установить флаг изменения данных
const handlePhoneChange = (event) => {
  setPhone(event.target.value);
  setIsDataChanged(true);
};
const handleNameChange = (event) => {
  setName(event.target.value);
  setIsDataChanged(true);
};
const handleSurnameChange = (event) => {
  setSurname(event.target.value);
  setIsDataChanged(true);
};


const [isDataChanged, setIsDataChanged] = useState(false);

 

  const changeSetting = () => {
    setIsActive(false);
    const [email, name, surname, phone] = Array.from(document.querySelectorAll(".Email, .Name, .Surname, .Phone"));
    [email, name, surname, phone].forEach((field) => (field.disabled = false));
  };
  
  const CancelSettings = () => {
    setIsActive(true);
    const [email, name, surname, phone] = Array.from(document.querySelectorAll(".Email, .Name, .Surname, .Phone"));
    [email, name, surname, phone].forEach((field) => (field.disabled = true));
  };

  
  return (
    <div className="UserProfile_Container">
      <div className="ProccesLabel">
        <AiFillInfoCircle className="icon"/>
        <span className="ProccesLabel_Message"></span>
      </div>
      <div className="UserProfile_Content">

        <div className="UserProfile_Heading">
          <div className="UserProfile_Heading_Photo">
            <img src={avatar} alt="" />
          </div>
          <div className="UserProfile_Heading_NickName">
            <span>{displayName}</span>
          </div>
        </div>

        <form className="UserProfile_Settings" onSubmit={writeUserData}>

          <div className="UserProfile_Email_Phone">
            <div className="UserProfile">
              <span>Email</span>
              <input className="Email disabled " defaultValue={email} disabled required />
            </div>

            <div className="UserProfile">
              <span>Phone</span>
              <MaskedInput className="Phone disabled" placeholder="Your Phone" mask={[ /\d/, /\d/ , '(', /[0-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]} defaultValue={userData.phone || ""} type="tel" 
              onChange={handlePhoneChange} disabled required  />
            </div>
          </div>
          
          <div className="UserProfile_Name_Surname">
            <div className="UserProfile">
              <span>Name</span>
              <input className="Name disabled"  placeholder="Your Name" defaultValue={userData.name || ""} type="text"  onChange={handleNameChange} disabled required />
            </div>

            <div className="UserProfile">
              <span>Surname</span>
              <input className="Surname disabled" placeholder="Your Surname" defaultValue={userData.surname || ""} type="text"  onChange={handleSurnameChange} disabled required />
            </div>
          </div>
        
        </form>

        <div className="Btns">
            <button className="Change Btn" onClick={changeSetting} disabled={!isActive}>
              <span>Change Settings</span>
            </button>
            <button className="Change_Des Btn" onClick={CancelSettings} disabled={isActive}>
              <span>Cancel</span>
            </button>
            <button className="Save Btn" onClick={writeUserData} type="submit" disabled={isActive} >
              <span>Save</span>
            </button>
        </div>

        <div className="Btn_LogOut">
            <div className="LogOut" onClick={handleLogout}>
              <span><Link className='link' to="/">Log Out</Link></span>
            </div>
        </div>

        <div className="link_to_home">
            <Link className='link' to="/" ><span className="btn_header">Return to Home Page</span></Link>
        </div>
      </div>
    </div>
  )
}

export { UserProfile };