// import React from 'react'
// import {Link } from 'react-router-dom'
// import Form from './Form'
// import { useState,useEffect } from 'react';
// import { RxHamburgerMenu } from "react-icons/rx";
// import { AiOutlineClose } from "react-icons/ai";
// function Nav() {
//    const [isMenuOpen, setIsMenuOpen] = useState(false);
//    const [showForm, setShowForm] = useState(false);

//    const ShowForm = () => {
//      setShowForm(!showForm);
//    }

//    useEffect(()=>{
//       setTimeout(()=>{
//          setShowForm(true)
//       }, 10000) 
//     }, [])

//   return (
  
  
//    <>
    
//    <div className=' fixed top-0 left-0 right-0 z-40 w-screen h-16 px-5 py-2 font- flex justify-between bg-white shadow-xl'>
//    <div className='h-10 mt-[1%] md:h-12 md:mt-[0%]'>
//                   <Link to="/">   
//                   <img className='aspect-auto w-[70%]' src="\images\logo.webp" alt="Logo"  />
//                   </Link>
//                </div>
              
            
//                <div className='navbar  box-content  absolute mt-[15%]  hidden md:block  text-xl text-center p-5 ml-[25%] md:relative  md:w-4/5 md:p-4 md:m-[0%] md:ml-[-2%] md:relative md:text-zinc-600 md:text-base md:font-semibold'  >
//               <ul className=' relative  md:flex md:justify-between px-8 '>
                   
//                    <li><Link to="./ModularKitchen" >Modular Kitchen</Link></li>
//                    <li><Link to="./LivingRoom">Living Room</Link></li>
//                    <li><Link to="./Bedroom">Bedroom</Link></li>
//                    <li><Link to="./Wardrobe">wardrobe</Link></li>
//                    <li><Link to="./Bathroom">Bathroom</Link></li>
                 
//                   </ul>
//                </div>

              
       
//           <div className='mt-4'>
              
//               <button className='p-1  bg-gradient-to-r from-amber-500 to-pink-500 rounded-lg text-sm px-2 ml-[-20%]  md:ml-[0] md:text-sm font-semibold  text-center md:w-36  text-white  hover:bg-green-600 cursor-pointer ' onClick={ShowForm}>Get Free Estimate</button>
             
              
//              </div>
//           <div
//             className="hidden max-lg:block cursor-pointer"
//             onClick={() => {
//               setIsMenuOpen(!isMenuOpen);
//             }}
//           >
//             <RxHamburgerMenu className="md:hidden text-4xl" />
//           </div>

        
//                   </div>

//                   {isMenuOpen && (
//         <div>
//           <nav className="fixed z-50 w-[45%] h-[30%]  animate-fadeIn mt-[2%] mr-[5%] bg-gradient-to-r from-amber-500 to-pink-500 rounded-lg text-white text-lg float-right top-0 right-0 center bottom-0 lg:bottom-auto bg-slate-100  ">
//             <div
//               className="hidden max-lg:block fixed right-0  px-8 py-4 cursor-pointer"
//               onClick={() => {
//                 setIsMenuOpen(!isMenuOpen);
//               }}
//             >
//               <AiOutlineClose className="text-4xl animate-fadeOut" />
//             </div>
//             <ul className=" lg:hidden flex flex-col items-center justify-center h-full ">
//             <li><Link to="./ModularKitchen">Modular Kitchen</Link></li>
//                    <li><Link to="./LivingRoom">Living Room</Link></li>
//                    <li><Link to="./Bedroom">Bedroom</Link></li>
//                    <li><Link to="./Wardrobe">wardrobe</Link></li>
//                    <li><Link to="./Bathroom">Bathroom</Link></li>
                 
                
//             </ul>
//           </nav>
//         </div>
//       )}

//                   {showForm && (
//                  <Form/>
//                  )}
     
//    </>
//   )
// }

// export default Nav

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Form from './Form';
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const ShowForm = () => {
    setShowForm(!showForm);
  }

  useEffect(() => {
    setTimeout(() => {
      setShowForm(true);
    }, 50000);
  }, []);

  return (
    <>
      <div className='fixed top-0 left-0 right-0 z-40 w-screen h-16 px-5 py-2 flex justify-between bg-white shadow-xl'>
        <div className='h-10 mt-[1%] md:h-12 md:mt-[0%]'>
          <Link to="/">
            <img className='aspect-auto w-[70%]' src="\images\logo.webp" alt="Logo" />
          </Link>
        </div>

        <div className='navbar box-content absolute mt-[15%] hidden md:block text-xl text-center p-5 ml-[25%]  md:w-4/5 md:p-4 md:m-[0%] md:ml-[-2%] md:relative md:text-zinc-600 md:text-base md:font-semibold'>
          <ul className='relative md:flex md:justify-between px-8'>
            <li  className="p-1 relative group">
              <Link to="./ModularKitchen">Modular Kitchen</Link>     
            </li>
            <li className="p-1"><Link to="./LivingRoom">Living Room</Link></li>
            <li className="p-1"><Link to="./Bedroom">Bedroom</Link></li>
            <li className="p-1"><Link to="./Wardrobe">Wardrobe</Link></li>
            <li><Link to="./Construction">Construction</Link></li>
            <li className="p-1"><Link to="./Bathroom">Bathroom</Link></li>
          </ul>
        </div>

        <div className='flex items-center mt-4'>
          <button
            className='p-1 ml-2 bg-gradient-to-r from-amber-500 to-pink-500 rounded-lg text-sm px-2 md:text-sm font-semibold text-white hover:bg-green-600 cursor-pointer'
            onClick={ShowForm}
          >
            Get Free Estimate
          </button>
        </div>

        <div
          className="hidden max-lg:block cursor-pointer"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          <RxHamburgerMenu className="md:hidden text-4xl" />
        </div>
      </div>

      {isMenuOpen && (
        <div>
          <nav className="fixed z-50 w-[45%] h-[30%] animate-fadeIn mt-[2%] mr-[5%] bg-gradient-to-r from-amber-500 to-pink-500 rounded-lg text-white text-lg float-right top-0 right-0 center bottom-0 lg:bottom-auto bg-slate-100">
            <div
              className="hidden max-lg:block fixed right-0 px-8 py-4 cursor-pointer"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <AiOutlineClose className="text-4xl animate-fadeOut" />
            </div>
            <ul className="lg:hidden flex flex-col items-center justify-center h-full">
              <li><Link to="./ModularKitchen">Modular Kitchen</Link></li>
              <li><Link to="./LivingRoom">Living Room</Link></li>
              <li><Link to="./Bedroom">Bedroom</Link></li>
              <li><Link to="./Wardrobe">Wardrobe</Link></li>
              <li><Link to="./Construction">Construction</Link></li>
              <li><Link to="./Bathroom">Bathroom</Link></li>
            </ul>
          </nav>
        </div>
      )}

      {showForm && <Form />}
    </>
  );
}

export default Nav;
