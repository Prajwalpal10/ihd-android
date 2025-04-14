
import {Link } from 'react-router-dom'

function Card(prop){
   
   
    return(
     
     <div className="w-1/2 md:w-1/2 lg:w-1/2 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2 ">
       <div className=" rounded-md m-h-64 p-2 w-[100%]  transform hover:translate-y-2 hover:shadow-xl hover:shadow-amber-400 hover: transition duration-300 hover:cursor-pointer">
       
      
       
         <figure className="mb-4 " >
           <img src={prop.icon} alt="icons" className="w-[100%] md:w-[80%] mt-[10%]  ml-auto mr-auto rounded-md " />
         </figure>        
       
                     
          <h1 className='text-4sm  text-center md:text-[25px] md:font-semibold '>{prop.Title}</h1>
       </div>    
     </div>
    )
 }

function Service(){
    return (
        <>
        <hr />
        <div className='p-5 w-full'>
              
             <h1 className='text-xl  font-semibold text-zinc-700 text-center md:text-3xl'> Insight Home Decor Services</h1> 
       
             <div className="flex text-center flex-row " >
            <div className="container   mt-5 -mr-5 text-center   md:mt-10 md:ml-[10%] md:mr-[10%] flex flex-wrap items-start ">
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

};

export default Service;


const data=[
    {
        icon:"/images/Construction/services/civil.webp",
        title:"Civil Work",
      
        
    },
    {
        icon:"/images/Construction/services/painting.webp",
        title:"Painting",
           },
    {
        icon:"/images/Construction/services/electric.webp",
        title:"Electric",
        
    },
    {
        icon:"/images/Construction/services/Falseceilingsbmr.webp",
        title:"False Ceiling",
          },
    {
        icon:"/images/Construction/services/flooring.webp",
        title:"Flooring",
        
    },
    {
        icon:"/images/Construction/services/plumbing.webp",
        title:"Plumbing",
        
    },
    
       {
        icon:"/images/Construction/services/railing.webp",
        title:"Railing & Windows",
          },
    {
        icon:"/images/Construction/services/Water-proofing.webp",
        title:"Water Proofing",
          },
   
    
];