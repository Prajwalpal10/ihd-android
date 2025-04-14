import React from 'react'
import { Link } from 'react-router-dom';
import { Typography } from "@material-tailwind/react";
import FeedbackForm from './FeedbackForm';
import Gmap from './Gmap'
 
const LINKS = [
  {
    title: "Product",
    items: ["ModularKitchen", "LivingRoom", "Bedroom", "Bathroom","Wardrobe","FeedbackForm"],
      },
       
];
const contact=[
  {
    title: "Contact-us",
    items: ["+91-9403689964" , "+91-8793004161", "insightdecor11@gmail.com"],
      },
]


function Footer() {
    return (

        <footer className="relative w-full ">
             <div>
        <br/>   
      <hr />
          <div className=' relative  md:flex  w-[100%] center  p-5 justify-between'>
             <Card img={"/images/Icon/shield.jpg"} heading={"10 Year Warranty"}  text={"Choose interiors designed with superior quality material, leaving no room for defects."} />
             <Card img={"/images/Icon/family.jpg"} heading={"200+ Happy Families"} text={"We'll offer exceptional seating options that ensure comfort, reliability, and faster delivery. "}/>
             <Card img={"/images/Icon/expert.jpg"} heading={"35+ Design Experts"}  text={"Explore design ideas and co-create your dream home with our experienced designers"}/>
             <Card img={"/images/Icon/customize.jpg"} heading={"Personalize Designs"} text={"Complete your design journey and get unwavering support from our dedicated care team."}/>
          </div>
          <hr />
          <br />
        </div >
          <div className="mx-auto w-full max-w-7xl px-8 ">
            <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
              <Typography variant="h5" className="mb-6">
              <img className='aspect-auto ml-[30%]' src="\images\logo.webp" alt="Logo" loading='lazy'/>
              <div className='mt-[5%] flex justify-between md:justify-around'>
                <div>
                <h1 className='text-sm md:text-xl'>
                  Rohan Dudhankar
                  </h1>
                  <p className='text-xs  text-center text-zinc-500'>Founder & CEO of <br />Insight Home Decor</p>
                </div>
                <div>
                <h1 className='text-sm md:text-xl'>
                  Yash Dudhankar
                  </h1>
                  <p className='text-xs  text-center text-zinc-500'>Co-Founder of <br />Insight Home Decor </p>
                </div>
         
                  </div>
                  <div className='mt-[5%]'>

                  <div class="responsive-map-container" className='ml-[15%]'>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.2818262694923!2d79.1291597743198!3d21.101327480566194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4b8c066dc7e31%3A0xe7c189cf5910732f!2sInsight%20Home%20Decor!5e0!3m2!1sen!2sin!4v1719240975463!5m2!1sen!2sin" 
width="320" 
height="240"
loading="lazy"
className='md:h-[200px] md:w-[420px]'
title='Bussiness Address'

>
</iframe>
<br />
<address  className='text-sm md:text-sm'> Plot No.53, K-14, New Narsala Rd, Indra Nagar, Nagpur, Maharashtra 440034</address>
  </div>

</div>

                  
              </Typography>
              <div className="grid grid-cols-2 justify-between gap-4">

                {LINKS.map(({ title, items }) => (
                  <ul key={title}
                      variant="small"
                      
                      className="mb-3 md:text-xl font-semibold opacity-100 text-red-800"
                    >
                      {title}
                   
                    {items.map((link) => (
                      <li key={link}
                          className="py-1.5 text-black md:text-xl md:font-medium font-normal transition-colors  hover:text-yellow-600 cursor-pointer"
                        >
                          
                            
                          
                       <Link to={link} >{link}</Link>
                      
                      </li>
                    ))}
                    <br />
                    <li className=''><a href="https://learn.insighthomedecors.com/">Career</a></li>
                    
                  </ul>
                  
                ))}

                  

                 {contact.map(({ title, items }) => (
                  <ul key={title}                 
                      
                      className="mb-3 md:text-xl font-semibold opacity-100 text-red-800"
                    >

                      {title}
                   
                    {items.map((link) => (
                      <li key={link}                       
                          
                          className="py-1.5 md:text-xl text-black md:font-medium font-normal transition-colors  hover:text-yellow-600"
                        >
                          {link}
                        
                      </li>
                    ))}
                  </ul>
                ))}

   
   

            
              </div>
            </div>




            <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
              <Typography
                variant="small"
                className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
              >
                &copy; {currentYear} <a href="./">InsightHomeDecor</a>. All
                Rights Reserved.
              </Typography>
              <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
                <Typography as="a" href="https://www.facebook.com/people/Insight-Home-Decor/100089406713692/" target='_blank' alt='Facebook' className="opacity-80 transition-opacity hover:opacity-100">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                      aria-labelledby="Facebook"
                    />
                  </svg>
                </Typography>
                <Typography as="a" href="https://www.instagram.com/_insight_home_decor/" target='_blank' alt='Instagram' className="opacity-80 transition-opacity hover:opacity-100">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                      aria-labelledby="instagram"
                    />
                  </svg>
                </Typography>

                <Typography as="a" href="https://www.youtube.com/@insighthomedecor45" target='_blank' alt='YouTube'  className="opacity-80 transition-opacity hover:opacity-100">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M20.5949 4.45999C21.5421 4.71353 22.2865 5.45785 22.54 6.40501C22.9982 8.12002 23 11.7004 23 11.7004C23 11.7004 23 15.2807 22.54 16.9957C22.2865 17.9429 21.5421 18.6872 20.5949 18.9407C18.88 19.4007 12 19.4007 12 19.4007C12 19.4007 5.12002 19.4007 3.405 18.9407C2.45785 18.6872 1.71353 17.9429 1.45999 16.9957C1 15.2807 1 11.7004 1 11.7004C1 11.7004 1 8.12002 1.45999 6.40501C1.71353 5.45785 2.45785 4.71353 3.405 4.45999C5.12002 4 12 4 12 4C12 4 18.88 4 20.5949 4.45999ZM15.5134 11.7007L9.79788 15.0003V8.40101L15.5134 11.7007Z" fill="#000000"
                  aria-labelledby="YouTube"
                  />
                  </svg>
                </Typography>
              </div>
            </div>
          </div>
        </footer>
      );
   
}

export default Footer


 
const currentYear = new Date().getFullYear();
 
export function FooterWithSocialLinks() {
 
}


const Card=({img,heading,text})=>{
    return(
      <>
      <div className='text-center justify-center align-center mt-5 md:w-1/4 bl-2 bl-zinc-700'>
         <div className='align-center justify-center flex flex-wrap '>
                  <img className='h-16 md:h-24 ' src={img} alt="image" loading='lazy' />
         </div>
           <div>
            <h1 className='p-3 text-zinc-700 text-xl md:text-xl font-semibold'>{heading}</h1>
           </div>
           <p className='w-[80%] text-sm md:text-lg  ml-[10%]'>{text}</p>
         </div>
      
      </>
    )
  }






  
