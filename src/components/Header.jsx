import React from 'react'
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import Imgslide from './Imgslide';
import End from './End';
import Number from './Number';
import LogoSlider from './LogoSlider'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import About from './About'

//public\images\facebook-logo.png

function Header() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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


  const living=`The living room is often considered the heart of the home, where family and friends gather to relax, entertain, and enjoy each other's company.`;
  const kitchen=`A kitchen is more than just a space for cooking; it's often considered the heart of a home. `;
  const wardrobe='A wardrobe is an essential piece of furniture in any home, primarily used for storing clothes, accessories, and other personal items.';
  
  
  return (
   <div className='w-screen'> 
  
         <a href="https://wa.me/919403689964" target='_blank'>
          <span className='fixed animate-bounce z-50 ml-[89%] mt-[55%] md:ml-[96%] md:mt-[20%] '><img className=' h-10 md:h-[5%] ' src="\images\whatsapp-logo.webp" alt="Whatsapp Logo" /></span>
          </a> 
          <a href="https://www.instagram.com/_insight_home_decor/" target='_blank'>
          <span className='fixed animate-bounce z-50 ml-[89%] mt-[75%] md:ml-[96%] md:mt-[26%] '><img className=' h-8 md:h-12 ' src="\images\Insta-logo.png" alt="Insta Logo" /></span>
          </a> 
          <a href="https://www.facebook.com/people/Insight-Home-Decor/100089406713692/" target='_blank'>
          <span className='fixed animate-bounce z-50 ml-[89%] mt-[95%] md:ml-[96%] md:mt-[31%] '><img className=' h-8 md:h-12 ' src="\images\facebook-logo.png" alt="Insta Logo" /></span>
          </a> 
          <div className='relative w-full h-full mt-[4%] md:mt-[-1%] overflow-hidden shadow-2xl '>
            
    <h1 className='absolute z-10  font-semibold bg-gradient-to-r from-amber-200 to-yellow-500 inline-block text-transparent bg-clip-text mt-[18%] ml-[32%] md:text-6xl'>Insight Home Decor</h1>
          <LazyLoadImage
           effect='blur'           
           placeholderSrc="\images\form.webp"
           delayTime={100}
              src="\images\form-11.webp" alt="Banner"   className='aspect-auto '/>               
               </div>  
               
               
<Imgslide Title={"Living Room"} cat={"livingroom"} urlnav={"./LivingRoom"} disc={living} />
<Imgslide Title={"Wardrobe"}  cat={"wardrobe"} urlnav={"./Wardrobe"} disc={wardrobe}/>
<Imgslide Title={"Modular Kitchen"} cat={"kitchen"} urlnav={"./ModularKitchen"} disc={kitchen} />


<br/>
<hr />
<div className='relative p-5 '>
  
  <h1 className='text-sm  md:text-3xl font-bold text-zinc-800 text-center'>Here's What our clients have to say ...</h1>

<div className=' p-3 mt-[3%] w-[100%]  relative flex flex-col  justify-around md:py-5 md:flex-row  md:w-[100%] md:justify-between gap-5'>
  
<Slider {...settings}>


  <div className='w-full h-auto ' >
  

<LiteYouTubeEmbed 
       id="PPsgI1mLgiA" 
       adNetwork={true}
       
       poster="maxresdefault"
       title="YouTube Embed"  
    />
    <br />
   
    <Details
      description={`"We needed to get our temple ready for Janmashtami. We had to finish it 
        up right before the festival, and there was really not much time at all. There was one main issue: they didn’t 
        do the Radha-Krishna decorations properly because of the lighting. But they managed to fix everything up within a month,
        and now our kitchen is all set for the occasion."`}
        name={`Mr. Alok Sarkar & Mrs.Sangeeta Sarkar`}
        work={`Modular kitchen and Puja Unit`}
        location={`Nagpur,Maharashtra`}/>

        </div>  
    <div className='w-full h-auto ' >
  
<LiteYouTubeEmbed
       id="KRT_R9v5OQ4" 
       adNetwork={true} 
       poster="maxresdefault"
       title="YouTube Embed" 
    />
    <br />
     
    <Details
      description={`"The finish they did and the amount of time they took to complete it is just incredible. 
      Because, you know, just two days before the inauguration, the situation in the house was such that nothing was done at all; all
       the materials were just piled up. But within two days,Yash's team and the Insight Home team came in and got everything assembled
        and ready.That was really impressive."`}
      name={`Mr. & Mrs Zilkar`}
      work={`2BHK Interior`}
      location={`Nagpur,Maharashtra`}
    />
    



    </div>  

    <div className='w-full h-auto ' >
  
  <LiteYouTubeEmbed
         id="c3WyJcO85aU" 
         adNetwork={true} 
         poster="maxresdefault"
         title="YouTube Embed" 
      />
       <br />
    <Details
     description={`"I was here with these kids, and they did such a great job! I felt really 
      comfortable with both of them. They worked really well and understood everything. We tried our best,
       and the whole time, we made sure everyone felt at ease. It’s all about that vibe, I want to emphasize that these
        kids deserve meaningful work. Just look at what they’ve done today! I’m confident they’ll continue to excel."`}
        name={`Mr.Rajiv Renge & Mrs.Radhika Renge`}
        work={`3BHK Interior`}
        location={`Nagpur,Maharashtra`}
        />
      
  
  
      
      </div>  
  </Slider>
</div>
</div>



  <Number/>
  <End/>
 
<LogoSlider/>
<About/>


</div>     

   
  )
}

export default Header




const Details=(props)=>{
  return(
    <>
    <p className='justify text-left text-zinc-800 text-sm md:text-base'>{props.description} </p>
    <br />
    <p className='font-semibold text-zinc-800 text-center text-sm md:text-base'>{props.name}</p>
   
    <p className='text-zinc-900 text-center' text-sm md:text-base>{props.work}</p>
    <p className='text-zinc-500 text-center text-sm md:text-base'>{props.location}</p>
    </>
  )
};
