import React from 'react'
import Products from './Products';
import LogoSlider from './LogoSlider'

function Bedroom() {
 

    const disc=`The bedroom is a private sanctuary within the home, a place dedicated to rest, relaxation, and rejuvenation.
The bedroom is more than just a place to sleep; it's a personal retreat where you can unwind and recharge. Its design and functionality are crucial for creating a restful and inviting environment.`
    return (
      <>
     
  
      <div >
        <Products data="bedroom" Com={"Bedroom Designs"} hero="\images\Bedroom\hero-1.webp" discription={disc}/>
      </div>
      <LogoSlider/>
    
      </>
    )
}

export default Bedroom
