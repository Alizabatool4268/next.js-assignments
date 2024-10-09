import Image from "next/image";
import style from "./page.module.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer"

export default function Home() {
  return (
   <>
   <Navbar />
   <hr />
   <div className={style.container}>
   <h1 className={style.mainheading}>Hey are you ready to shop</h1>
   </div>
   <section className={style.productlist}>
     <div className={style.productone}>
      <div><Image
       width={100}
       height={200}
       src="/glowup-eye-cream.webp"
       alt="image of product one"></Image></div>
       <button>Add to cart</button>
     </div>

     <div className={style.productTwo}>
     <div><Image
       width={200}
       height={200}
       src="/glowup-night-cream.webp"
       alt="image of product one"></Image></div>
       <button>Add to cart</button>
     </div>
    

     <div className={style.productThree}>
     <div><Image
       width={200}
       height={200}
       src="/glowup.cream-two.webp"
       alt="image of product one"></Image></div>
       <button>Add to cart</button>
     </div>

     <div className={style.productFour}>
     <div><Image
       width={200}
       height={200}
       src="/shirts.AmClone.jpg"
       alt="image of product one"></Image></div>
       <button>Add to cart</button>
     </div>
   </section>
  <Footer />

  </>
  );
}
