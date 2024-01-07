import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';



import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
  } from "react-router-dom";
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Program from './components/Program';
import Contact from './components/Contact';
import Blog from './components/Blog';
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Home />}>
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path='/program' element={<Program/>} />
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Route>
    )
  );
  
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );

  
 

  
  

