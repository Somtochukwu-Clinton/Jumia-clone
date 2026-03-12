import React from 'react'

import './Search.css'

const Search = () => {
  return (
    <>
    <main>
         <nav className='third-container'>
        
        
         <img className='logo1' src="/src/assets/jumia.png" alt="logo" />


             <div className='search-container'>
            <input className='input' type="search" placeholder='Search products,brands and categories' />
           <button className='button1'>Search</button>
           </div>

           <div className='display'>
            <img className='second-logo' src="/src/assets/profilelogo.png" alt="accountlogo" />
             <p>Account</p>
                <select className='select'></select>
           </div>


            <div className='display'>
                <img className='second-logo' src="/src/assets/helplogo.png" alt="Helplogo" />
                <p>Help</p>
                <select className='select' name="" id=""></select>
            </div>
             
             <div className='display'>
                <img className='second-logo' src="/src/assets/cartlogo.png" alt="" />
                <p>Cart</p>
             </div>
          
        </nav>
    </main>
    </>
  )
}

export default Search
