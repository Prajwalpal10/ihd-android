import React from 'react'
import Products from './Products';
function Bathroom() {


  const dis="Bathroom design is about finding the perfect balance between form and function, and with a little bit of planning and creativity, you can create a space that is not only beautiful but also functional.";
  return (
    <div >
      <Products data='bathroom' Com={"Bathroom Designs "} hero="\images\Bathroom\hero-1.webp" discription={dis}/>
    </div>
  )
}

export default Bathroom
