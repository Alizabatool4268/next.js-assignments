import style from "../page.module.css";
import Link from "next/link";

export default function Navbar(){
    return(
      <header>
        <nav>
          <ul className={style.navbar}>
            <li className={style.li}>
               <Link href={'/'}> Home </Link> 
               </li>
            <li className={style.li}>
                <Link href={'/about'} >about</Link>
            </li>
            <li className={style.li}>
                <Link href={'/contact'}> contact</Link>
            </li>
            <li className={style.li}>
                <Link href={'/contact/services'}> services</Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  }