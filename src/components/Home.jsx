import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './Header';
import LivingRoom from './LivingRoom';
import ModularKitchen from './ModularKitchen';
import Wardrobe from './Wardrobe';
import Bathroom from './Bathroom';
import Bedroom from './Bedroom';
import Construction from './Construction';
import Img from './Img';
import ImageList from './ImgList';
import NotFound from './NotFound';
import UnderMaintenance from './Mainten';
import FeedbackForm from './FeedbackForm';

import Nav from './Nav';
import Footer from './Footer';




function Home() {
  const routes = [
    { path: '/', component: Header },
    
    { path: '/LivingRoom', component: LivingRoom },
    { path: '/ModularKitchen', component: ModularKitchen },
    { path: '/Wardrobe', component: Wardrobe },
    { path: '/Bathroom', component: Bathroom },
    { path: '/Bedroom', component: Bedroom },
    { path: '/Construction', component: Construction },
    { path: '/IhdUploadImg', component: Img},
    { path: '/IhdUpdateImg', component: ImageList},
    { path: '/Mainten', component: UnderMaintenance},
    { path: '/FeedbackForm', component: FeedbackForm},

    { path:'/*',component:NotFound}

  ];

  return (
    <div className='relative   w-screen h-screen '>
    {/* <Nav />  */}  
    <Nav/>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.component />} />
        ))}
      </Routes>
      <Footer />
    

      
    </div>
  );
}

export default Home;
