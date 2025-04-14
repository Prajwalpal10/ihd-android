import React from 'react'
import Products from './Products';
function Wardrobe() {

const disc=`
A wardrobe is an essential piece of furniture in any home, primarily used for storing clothes, accessories, and other personal items.
Wardrobes are more than just storage units; they are integral to organizing personal spaces and enhancing the overall aesthetics of a room. With the right design and features, a wardrobe can significantly improve the functionality and appearance of any bedroom or dressing area.`
  return (
    <div>
      <Products data="wardrobe" Com={"Wardrobe Designs For Your Room"} hero="\images\wardrobe\hero-1.webp " discription={disc}/>
    </div>
  )
}

export default Wardrobe
