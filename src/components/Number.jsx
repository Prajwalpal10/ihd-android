import React, { useState } from 'react'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

function Num(props){
  const [counterState, setCounterState] = useState(false);
  return(
  <div className='text-center m-3  h-full w-1/4'>
      <ScrollTrigger onEnter={()=>setCounterState(true)} onExit={()=>setCounterState(false)}>
      
  <h1 className='text-2xl font-bold text-zinc-800 md:text-5xl'>
    {setCounterState && <CountUp
     start={0} end={props.no} duration={5}>

    </CountUp>
     }
    +</h1> 
   
      </ScrollTrigger>
  <div className='text-sm md:text-2xl text-zinc-500'>{props.title}</div>
</div>
  )
}


function Design(props){
  return(
  <div className='text-center ml-[2%]  h-full  md:w-1/4'>
     <div className='w-4/5'>
      <img className='aspect-[3/2]'   src={props.img} alt="Seesion"   />
     </div>
  <div className=' text-xs md:text-xl text-zinc-500 text-center md:w-4/5'>{props.text}</div>
</div>
  )
}



function Number() {
  
const data=[
  {
    img:"/images/session/S-1.webp",
    text:"Step 1. Meet Your Designer"

},
{
    img:"/images/session/S-2.webp",
    text:"Step 2. Walkthrough of Insight Home Decor Studio"

},
{
    img:"/images/session/S-3.webp",
    text:`Step 3. Free Personalised 
          3D Designs on SpaceCraft Pro`

},
{
    img:"/images/session/S-4.webp",
    text:"Step 4. Get an Instant Quote."

}
];

  return (
  <>
  <hr />
    <div className='w-full h-auto  bg-white  mb-[0]'>
         <div className='In-Numbers '>
             <h2 className='text-xl md:text-4xl font-bold text-center'>Insight Home Decor in Numbers</h2>

            <div className='flex justify-between w-auto h-auto p-5 mt-[-3%] ml-[5%]  md:mt-5 md:ml-18'>
               <Num no={200} title={"Happy Families"}/>
               <Num no={600} title={"In-house Designs"}/>
               <Num no={20000} title={"Catalouge Products"}/>
               <Num no={5} title={"Cities"}/>
               
            </div>

         </div>

         <div className='Design  '>
             <h2 className='md:text-4xl  font-bold text-center'>What is a Design Session ?</h2>

            <div className='flex justify-between w-auto h-auto mt-5 ml-18 md:p-12'>
             {
            data.map( (item,index)=>(
                    <Design key={index} img={item.img} text={item.text}/>

                      ))
             }  
            </div> 

         </div>
       
       
    </div>
    <hr />
  </>
  )
}




export default Number
