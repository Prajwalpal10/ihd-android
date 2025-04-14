import React from 'react'
import {Link } from 'react-router-dom'



function Card(prop){
   
   
   return(
    
    <div className="w-1/2 md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2  ">
      <div className=" rounded-md m-h-64 p-2 w-[50%]  transform hover:translate-y-2 hover:shadow-xl hover:shadow-amber-400 hover: transition duration-300 hover:cursor-pointer">
      
      <Link to={prop.url} >
      
        <figure className="mb-4 " >
          <img src={prop.icon} alt="icons" className=" w-[90%]  ml-auto mr-auto rounded-md " />
        </figure>        
      </Link>
                    
         <h1 className='text-4sm  text-center md:text-xl md:font-medium'>{prop.Title}</h1>
      </div>    
    </div>
   )
}

function End() {
   
     return (
    <>
    <hr />
    <div className='p-5 w-full'>
          
         <h1 className='text-xl  font-semibold text-zinc-700 text-center md:text-3xl'> All-in-One interior Solution</h1> 
   
         <div className="flex text-center flex-row" >
        <div className="container  ml-8 mt-2 mr-5 text-center   md:mt-10 md:ml-[20%] md:mr-[10%] flex flex-wrap items-start ">
          {
              
              data.map((item,index)=>(                   
                   
                      <Card key={index} icon={item.icon} Title={item.title} url={item.url}/>
                   
                      )
                      )
                    }
       
                    </div>
    </div>
    </div>
    <div>

  
  
   </div>             
    
    
    <hr />

    
    

    
                    </>
    
  )
}

export default End


const data=[
    {
        icon:"/images/Icon/wodrobe.webp",
        title:"Wardrobe",
        url:"./Wardrobe"
        
    },
    {
        icon:"/images/Icon/washroom.webp",
        title:"Washroom",
        url:"./Bathroom"
    },
    {
        icon:"/images/Icon/Modular-Kitchen.webp",
        title:"Modular Kitchen",
        url:"./ModularKitchen"
    },
    {
        icon:"/images/Icon/double-bed.png",
        title:"Bedroom",
        url:"./Bedroom"
    },
    {
        icon:"/images/Icon/living-room.png",
        title:"Livingroom",
        url:"./LivingRoom"
    },
    {
        icon:"/images/Icon/construction.webp",
        title:"Construction",
        url:"./Construction"
    },
    
       {
        icon:"/images/Icon/space.webp",
        title:"Space Saving",
        url:"./Mainten"
    },
    {
        icon:"/images/Icon/tv-unit.webp",
        title:"TV Unit",
        url:"./Mainten"
    },
   
    
];