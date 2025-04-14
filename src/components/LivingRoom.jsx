import React from 'react'
import Products from './Products'

function LivingRoom() {
    
 
      const dis="The living room is often considered the heart of the home, where family and friends gather to relax, entertain, and enjoy each other's company.The living room is a versatile space that serves as the backdrop for many of life's important moments. Its design and functionality reflect personal tastes, lifestyle needs, and the latest trends in home decor. "
  return (
    <>
    <div >
      <Products data="livingroom" Com={"Living Room Interiors"} hero="\images\Livingroom\hero-1.webp" discription={dis}/>
    </div>
    
    
    </>
  )
}

export default LivingRoom
