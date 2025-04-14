import React from 'react'
import Products from './Products';
import LogoSlider from './LogoSlider'
import Services from './Pages/Services'

function Construction() {


 const disc=`Home construction is a multifaceted process that involves designing and building residential structures, ranging from single-family houses to multifamily units like apartments and townhomes.Home construction is a dynamic and evolving field that combines traditional craftsmanship with modern technology and design principles. It plays a crucial role in providing 
 comfortable, safe, and sustainable living spaces for individuals and families.`

  return (
    <>   

    <div >
      <Products data="civil" Com={"Civil Construction Work"} hero="\images\Construction\Hero.webp" discription={disc}/>
    </div>
    <Services/>
  
    </>
  )
}

export default Construction;
