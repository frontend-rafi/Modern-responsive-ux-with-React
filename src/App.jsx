import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import styles from './style'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Business from './components/Business'
import Billing from './components/Billing'
import CartDeal from './components/CartDeal'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'
// import { Billing, , CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "components";


function App() {

  return (
    <div className=" bg-primary w-full overflow-hidden ">
  {/* navbar start */}
   <div className={`${styles.paddingX} ${styles.flexCenter}`}>
<div className={`${styles.boxWidth}`}>
<Navbar/>
</div>
   </div>
     {/* navbar end */}
     {/*  Hero sec*/}
     {/* //! bg-primary needed */}
<div className={` ${styles.flexStart}`}>
<div className={`${styles.boxWidth}`}>
<Hero/>
</div>
</div>
{/*  Hero end*/}
{/*  stats start*/}
<div className={` ${styles.flexStart}  ${styles.flexStart}`}>
<div className={`${styles.boxWidth}`}>
<Stats/>
<Business/> 
<Billing/>
<CartDeal/>  
<Testimonials/> 
<CTA/> 
<Footer/>
</div>
</div>

{/*  stats end*/}
    </div>
  )
}

export default App
