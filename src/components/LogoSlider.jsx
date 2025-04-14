import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LogoSlider=    () => {
    const [settings] = useState({ 

       dots:true,
            infinite: true,
             slidesToShow: 4, 
             slidesToScroll: 4,
              autoplay: true,
               speed: 300,
               arrows:false,
                autoplaySpeed: 4000, 
                cssEase: "linear" });

                

    const images = [
        "/images/logo/asian-paints-logo-freelogovectors.net_.webp",
        "/images/logo/Elica_logo.webp",
        "/images/logo/fevicol-logo.webp",
        "/images/logo/Hafele-Partners logo.webp",
        "/images/logo/invisible-bed.webp",
        "/images/logo/logo-faber.webp",
        "/images/logo/Marshalls.webp",        
        "/images/logo/png-transparent-urbaladder-logo.webp",
        "/images/logo/spitze.webp",
            "/images/logo/welspun-logo.webp",
        
    ];
        
return(
 <div className="w-[100%]  overflow-hidden">   
    <h2 className=' text-xl  font-semibold text-zinc-700 text-center md:text-3xl '>Our trusted partners</h2>
     <Slider {...settings} > 
     { 
        images.map((image, index)=> (
        <div key={index} className="container w-[40%] pt-5 ml-24 " > 
             <img src={image} alt="logo"  className=" md:h-18 w-32" /> 
        </div>
        
        ))
      } 
      
      
      </Slider >
</div >

        );

    }

export default LogoSlider