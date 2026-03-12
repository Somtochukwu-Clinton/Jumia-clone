import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <>
    <header className='first-header-container'>
         <img className='headerimage' src="https://ng.jumia.is/cms/0-5-TechWeek/2026/Brand-day/11-march-skyrun/BD_Desktop_top_strip.gif" alt="header picture" />
    </header>


    <main className='jumia-container'>
            <p className='sell-onjumia'>Sell on Jumia</p>
            <section className='jumia-list'>
            <p className='jumia'>Jumia</p>
            <p>Pay</p>
            <p>Delivery</p>
             </section>
        
    </main>

    

    
    </>
  )
}





export default Header
