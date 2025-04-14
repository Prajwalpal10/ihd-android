import { useState, useEffect } from 'react';
import axios from 'axios';
import Cards from './Cards';
import Number from './Number';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link, animateScroll as scroll } from 'react-scroll';

function Products({ data, Com, hero, discription }) {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://backend-eyb7.onrender.com/images/${data}`);
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };
    fetchData();
  }, [data]);

  return (
    <>
     <a href="https://wa.me/919403689964" target='_blank'>
          <span className='fixed animate-bounce z-50 ml-[89%] mt-[55%] md:ml-[96%] md:mt-[20%] '><img className=' h-10 md:h-[5%] ' src="\images\whatsapp-logo.webp" alt="Whatsapp Logo" /></span>
          </a> 
          <a href="https://www.instagram.com/_insight_home_decor/" target='_blank'>
          <span className='fixed animate-bounce z-50 ml-[89%] mt-[75%] md:ml-[96%] md:mt-[26%] '><img className=' h-8 md:h-12 ' src="\images\Insta-logo.png" alt="Insta Logo" /></span>
          </a> 
          <a href="https://www.facebook.com/people/Insight-Home-Decor/100089406713692/" target='_blank'>
          <span className='fixed animate-bounce z-50 ml-[89%] mt-[95%] md:ml-[96%] md:mt-[31%] '><img className=' h-8 md:h-12 ' src="\images\facebook-logo.png" alt="Insta Logo" /></span>
          </a> 
      <div className='w-[100%] mt-[10%] md:mt-[-5%] overflow-x-hidden'>
        <LazyLoadImage
          effect='blur'
          src={hero}
          placeholderSrc={hero}
          delayTime={300}
          className='object-cover h-auto'
          alt="Banner"
        />
        <div className='w-[80%] absolute -mt-14 ml-[18%]'>
          <h1 className='max-w-[80%] mt-[5%] text-white font-semibold md:text-3xl md:mt-[-.5%]'>{Com}</h1>
          <div className='border-solid border-red-700 border-2 w-[24%]'></div>
        </div>
      </div>

      <div className="flex items-center justify-center min-h-screen">
        <div className="container mr-[1%] ml-[1%] flex flex-wrap items-start">
          <div className="w-full mt-[5%] pb-8">
            <div className='w-[80%] ml-[8%] wrap text-justify md:w-[60%] md:ml-[20%]'>
              <p className='text-sm md:text-2xl text-zinc-600'>{discription}</p>
            </div>
          </div>
          {items.map((item, index) => (
            <Cards img={item.image} key={index} onClick={() => setItem(item.image)} />
          ))}
        </div>
      </div>
      <Number />

      {/* Smooth Scroll to Top Button */}
      <button
        className="fixed bottom-10 z-100 md:z-100 right-10 p-3 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition duration-300"
        onClick={() => scroll.scrollToTop()}
      >
        ↑ Top
      </button>
    </>
  );
}

export default Products;
