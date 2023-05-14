import {useEffect} from "react"
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { FormReg } from './FormReg';
import { setUser } from '../../store/slices/userSlice';


const Register = () => {
  const dispatch = useDispatch();
  const push = useNavigate()

  const handleRegister = (email, password, displayName) => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password , displayName)
      .then(({ user }) => {
        updateProfile(user, {
          displayName: user.displayName = document.getElementById("name").value,
          nickname: "asdfdassdaasdasd"
        })
        .then(() => {
          dispatch(setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
            displayName: user.displayName,
            photoURL: user.photoURL,
            nickname: user.nickname
          }));
          console.log(user.nickname)
          // перенаправляем пользователя на страницу приветствия
          push("/WelcomePage");
        })
        .catch(console.error);
        
      })
      .catch(console.error)
      
  }
  useEffect(() => {
    const auth = getAuth();
    auth.onAuthStateChanged((user) => {
     
      if (user) {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
            displayName: user.displayName,
            photoURL: user.photoURL
          })
        );
        push("/");
      }
    });
  }, []);

  return (
    <FormReg
      handleClick={handleRegister}
    />
  )
}

export { Register };