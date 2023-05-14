import { useEffect } from "react";
import { FormAuth } from "./FormAuth";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../store/slices/userSlice";
import { getAuth, signInWithEmailAndPassword , } from "firebase/auth";
import { useDispatch } from "react-redux";
import { AES } from 'crypto-js';



const Auto = () => {
  const dispatch = useDispatch();
  const push = useNavigate();


  const handleLogin = (email, password, displayName) => {
    const auth = getAuth();
    
    signInWithEmailAndPassword(auth, email, password, displayName)
      .then(({ user }) => {
        
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
      })
      .catch((error) => {
        let errorMessage = error.message
        let errorSplit = errorMessage.split("Firebase: Error (auth/ ")
        let ErrorFirebase = document.querySelector(".ErrorFirebase")
        ErrorFirebase.innerText = errorSplit
      });
      
  };


  // Проверяем, сохранены ли данные авторизации пользователя
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
            
          })
        );
        const encryptedTokenoNA = AES.encrypt(user.accessToken, 'Secret Key', {nBits: 256}).toString();
        const encryptedTokenoNB = AES.encrypt(encryptedTokenoNA, 'Secret Key of Secret Key', {nBits: 256}).toString();
        const encryptedTokenoNC = AES.encrypt(encryptedTokenoNB, 'Secret Key of Secret Key of Secret Key', {nBits: 256}).toString();
        const encryptedTokenoNE = AES.encrypt(encryptedTokenoNC, 'Secret Key of Secret Key of Secret Key of Secret Key', {nBits: 256}).toString();
        sessionStorage.setItem("email", user.email);
        sessionStorage.setItem("token", encryptedTokenoNE);
        push("/");
      }
    });
  }, []);

  return (
    <>
      <FormAuth handleLogin={handleLogin} />
    </>
  );
};

export { Auto };