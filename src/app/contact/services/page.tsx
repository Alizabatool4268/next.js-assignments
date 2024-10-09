import React from 'react';
import Navbar from '@/app/components/navbar';
import style from "@/app/page.module.css";
import Footer from "@/app/components/footer";

function services() {
  return (
    <>
    <Navbar />
    <hr />
   <div className= {style.mainheading}><h1>services up here</h1> </div> 
   <Footer />
   </>
  )
}

export default services