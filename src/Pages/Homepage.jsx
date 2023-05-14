import React, { Component } from 'react'
import { Navigate } from 'react-router-dom';

import Header from "../components/Header/Header";
import Header_Banner from "../components/Header_Banner/Header_Banner";
import Features from "../components/Features/Features";
import Contents from "../components/Contents/Contents";
import Gallery from "../components/Gallery/Gallery";
import Parthnes from "../components/Parthners/Parthners"
import Testimonials from "../components/Testimonials/Testimonials";
import VariableFonts from "../components/VariableFonts/VariableFonts";
import Footer from "../components/Footer/Footer";

import {useAuth} from "../hooks/use-auth"


const HomePage = () => {
  
  const {isAuth, email} = useAuth();
    return isAuth ? (
      <div>
        <Header/>
        <Header_Banner/>
        <Features/>
        <Contents/>
        <Gallery/>
        <Parthnes/>
        <Testimonials/>
        <VariableFonts/>
        <Footer/>
      </div> 
    ) : (
      <Navigate to="/login"/>
    )
  }


export default HomePage