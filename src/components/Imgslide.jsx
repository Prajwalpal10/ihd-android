import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Media } from '../../Data/Media';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


function Imgslide({Title,cat,urlnav,disc}) {


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 430,
            settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false }
          },
          {
            breakpoint: 768,
            settings: { slidesToShow: 2, slidesToScroll: 2, infinite: false }
          },
          {
            breakpoint: 1024,
            settings: { slidesToShow: 3, slidesToScroll: 3, infinite: false }
          }
        ]
      };

      
    
      

  return (
    <div className='w-11/12 m-auto '>
    <div className="mt-5 md:mt-20 ml-[3%] md:ml-0 mr-[1%]">
      
    <div className=" md:text-2xl text-zinc-700 font-semibold mb-5">
      {Title}
      <p className='text-xs md:text-lg '>{disc}</p>
      <Link to={urlnav} ><span className='float-right  md:text-lg hover:text-yellow-600 cursor-pointer' >See All</span></Link>
      </div>
      <br />
      <Slider {...settings}>
   {
     Media.filter(Media => Media.category===cat).map((d,index)=>(
       
        <div key={index} className="bg-white text-black rounded-lg ">
                     <div className='object-cover flex justify-center items-center rounded-lg'>
                     <LazyLoadImage
        effect='blur'
           
           placeholderSrc="\images\2.webp"
           delayTime={100} src={d.img } alt="image" className=" aspect-[3/2]  rounded-lg" />
                     </div>
       </div>

     ))
   }
   </Slider>
    </div>
   </div> 
  )
}

export default Imgslide
