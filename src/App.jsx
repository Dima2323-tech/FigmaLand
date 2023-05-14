import React, { useEffect } from 'react';

import { Auto } from './Pages/Auto/Auto';
import { Register } from './Pages/Register/Register';
import { WelcomePage } from './Pages/WelcomePage/WelcomePage';
import  HomePage  from './Pages/Homepage';
import { UserProfile } from './Pages/UserProfile/UserProfile';

import { Routes, Route, } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from './store/slices/userSlice';
import { getAuth } from "firebase/auth";

  const App = () => {
    const dispatch = useDispatch();
  
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
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo(0, 0);
  }

  const scrollBtn = () => {
    let body = document.querySelector('body');
    body.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <div onLoad={scrollTop}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<Auto />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/WelcomePage" element={<WelcomePage />} />
        <Route path="/UserProfile" element={<UserProfile />} />
      </Routes>

      <div
        className="arrow_container"
        data-aos="fade-in"
        onClick={scrollBtn}
      >
        <div className="arrow_content">
          <div className="arrow">
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
