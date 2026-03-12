import React, {useState} from 'react'
import './Hero.css'

const Hero = () => {
 const [Data, setData] = useState(0);
 const [imageData, setimageData] = useState([
    "https://ng.jumia.is/cms/0-1-weekly-cps/0-2026/Awoof-of-the-month/0-3-March/712x384.jpg",
    "https://ng.jumia.is/cms/0-5-TechWeek/2026/Live-now/Artboard-1.gif",
    "https://ng.jumia.is/cms/0-5-TechWeek/2026/Brand-day/11-march-skyrun/712x384_1.png",
    "https://ng.jumia.is/cms/0-5-TechWeek/2026/CPR/explosion-day/Teasing/Artboard-1.jpg",
    "https://ng.jumia.is/cms/0-5-TechWeek/2026/Initiatives/Guessproduct-main/Live/Artboard-1-1.gif",
 ])



 const addNum = () =>(
    setData (Data + 1)
 )

 const SubNum = () =>{
    if (Data > 1){
    setData(Data - 1)
 }else {
    setData(0)
 }
}

  return (
    <>


    
    <main className='background'>


        <div>
    <ul>
        <div className='container'>
            <img className='pics' src="/src/assets/Appliances.png" alt="" />
        <li>Appliances</li>
        </div>

        <div className='container'>
            <img className='pics' src="/src/assets/Phones.png" alt="" />
        <li>Phones & Tablets </li>
        </div>

        <div className='container'>
            <img className='pics' src="/src/assets/health.png" alt="" />
        <li> Health & Beauty</li>
        </div>

        <div className='container'>
            <img className='pics' src="/src/assets/Home.png" alt="" />
        <li>Home & Office</li>
</div>

         <div className='container'>
            <img className='pics' src="/src/assets/tv.png" alt="" />
            <li>Electronics</li>
         </div>
        

        <div className='container'>
    <img className='pics' src="/src/assets/clothes.png" alt="" />
        <li>Fashion</li>

        </div>

        <div className='container'>
            <img className='pics' src="/src/assets/supermarket.png" alt="" />
        <li>Supermarket</li>
        </div>

        <div className='container'>
            <img className='pics' src="/src/assets/computer.png" alt="" />
            <li>Computing</li>
        </div>
        
        <div className='container'>
            <img className='pics' src="/src/assets/Baby.png" alt="" />
             <li>Baby Products</li>
        </div>
       
       <div className='container'>
        <img className='pics' src="/src/assets/gaming.png" alt="" />
        <li>Gaming</li>
       </div>
        
        <div className='container'>
        <li>Musical Instrument</li>
        </div>
       
    </ul>
 </div>

         <div >
            <button onClick={addNum} className='button2'> &#60;</button>
          <img className='slideingImage' src={imageData [Data % imageData.length]} alt="slide" />
          <button onClick={SubNum} className='button3'>  &#62;</button>
         </div>
     



       <section>
        <div>
            <ul>
                <div className='container2'>
                    <img className='pics2' src="/src/assets/calllogo.png" alt="" />
                    <li>CAll TO ORDER</li>
                    
                    </div>


                <div className='container2'>
                    <img className='pics2' src="/src/assets/Home2.png" alt="" />
                     <li> Sell on Jumia</li>
                </div>


                <div className='container2'>
                    <img className='pics2' src="/src/assets/order.png" alt="" />
                    <li>Send Your Package</li>
                </div>
                
               
                
            </ul>

            <div className='last-style'>
                <img src="/src/assets/JFORCE-2.gif" alt="gif" />
            </div>
        </div>
       </section>
     </main>


      
    </>
    
  )
}

export default Hero
