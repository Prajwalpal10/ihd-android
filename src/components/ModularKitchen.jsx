import React from 'react'
import Products from './Products';
import LogoSlider from './LogoSlider'

function ModularKitchen() {


 const disc=`A kitchen is more than just a space for cooking; it's often considered the heart of a home. 

The kitchen plays a central role in home life, reflecting cultural, technological, and social trends. Whether for cooking, entertaining, or family gatherings, it's a space that brings people together`

  return (
    <>
   

    <div >
      <Products data="kitchen" Com={"Modular Kitchen Designs"} hero="\images\Kitchen\hero-1.webp" discription={disc}/>
    </div>
    <LogoSlider/>
  
    </>
  )
}

export default ModularKitchen
