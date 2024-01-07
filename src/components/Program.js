import React from "react";
import './Program';
import blog3 from './Assets/blog3.jpg.webp'
import blog4 from './Assets/blog4.jpg (1).webp'
import Offer from "./Offer";
import Navbar from "./Navbar";
import Trust from "./Trust";
import Footer from "./Footer";
import Starter from "./Starter";


function Program(){
    return(

        <section className='body-3'>
            <Navbar></Navbar>
           <Starter
           heading="Programs"
           paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique."
           >    
           </Starter>
          <Offer></Offer>  
        <div className='sc-3-offer'>
       
         <div className='off-box'>
           <div className='off-box-1'>
            <div className='content-main'>
                <div className='blog-img'>
                    <img src={blog3} className='blog-image'/>
                </div>
                <div className='blog-caption'>
                   <h3> <a href='/' className='head'>Faculty of Science</a></h3>
                   <p>Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi vitae<br/> tincidunt mi, et malesuada massa. Sed blandit placerat elit sit amet<br/> condimentum</p>
                   <a href='/' className='browser-btn-3'>Learn more</a> 
                </div>
            </div>
           </div>
         

         
           <div className='off-box-2'>
            <div className='content-main'>
                <div className='blog-img'>
                    <img src={blog4} className='blog-image'/>
                </div>
                <div className='blog-caption'>
                   <h3> <a href='/' className='head'>Faculty of Arts</a></h3>
                   <p>Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi vitae<br/>tincidunt mi, et malesuada massa. Sed blandit placerat elit sit amet<br/> condimentum</p>
                   <a href='/' className='browser-btn-3'>Learn more</a> 
                </div>
            </div>
           </div>
         </div>
         </div>
         <Trust></Trust>
         <Footer></Footer>
         </section>
    )
}
export default Program;