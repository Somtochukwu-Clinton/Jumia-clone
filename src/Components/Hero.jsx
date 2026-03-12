import React, {useState} from 'react'
import './Hero.css'

const Hero = () => {
 const [Data, setData] = useState(0)

 const addnNum = () =>(
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
        
     </main>
    </>
    
  )
}

export default Hero
