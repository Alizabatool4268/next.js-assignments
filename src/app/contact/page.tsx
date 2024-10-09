import React from 'react';
import Navbar from '../components/navbar';
import style from "../page.module.css";
import Footer from "../components/footer";

function contact() {
  return (
    <>
    <Navbar />
    <hr />
   <div className={style.mainheading}><h1>Contact page </h1></div>
    <Footer />
   </>
  )
}

export default contact;