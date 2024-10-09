import React from 'react';
import Navbar from "../components/navbar";
import style from "../page.module.css";
import Footer from "../components/footer";

function about() {
  return (
    <>
    <Navbar />
    <hr />
    <div className={style.mainheading}><h1>About page </h1></div>
    <Footer />
    </>
  )
}

export default about;