import React from 'react'
import  { useState,useEffect } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function Cards({img}) {
  const [items,setitems] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const imgElement = new Image();
    imgElement.src = img;
    imgElement.onload = () => {
      setLoading(false);
    };
  }, [img]);
  return (
      <>
      
    <div className="w-fit  cursor-pointer justify-center md:w-1/3 lg:w-1/3  pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2" onClick={()=>setitems(img)} >      
         
      <div className=" rounded-md w- p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-200"  >
      {loading ? (
            <Skeleton className='block rounded-md aspect-[5/3] object-cover' height={200} />
          ) : (
            <LazyLoadImage
              effect="blur"
              src={img}
              placeholderSrc="/images/2.webp"
              delayTime={800}
              className="block rounded-md aspect-[5/3] object-cover"
              alt="Banner"
            />
          )}
      </div>  

    </div>
    
  
   
    {items && (
    <div className='mt-[-55%] md:mt-[-30%]  ml-[-1%] fixed h-[110%]  w-screen p-5  backdrop-blur-lg    block z-50 snap-none '  onClick={()=>setitems(null)} style={{display:items?'block':'none'}}>
 <span className='text-black-800 text-5xl cursor-pointer float-right mr-[10%] hover:text-amber-500' onClick={()=>setitems(null)}>&times;</span>
    <div className=' aspect-square  md:w-[80%] md:h-[95%] md:ml-[8%] align-center  items-center'>

    <img src={items}  alt="product"  className=" object-fit translate-y-[85%] md:translate-y-0   self-center shadow-2xl rounded-md" />
    </div>


</div>
    )}
   
   

  


      </>
  )
  
 

}
export default Cards
