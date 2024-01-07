
import React from 'react'
import './Offer.css'
import blog1 from './Assets/blog1.jpg.webp'
import blog2 from './Assets/blog2.jpg.webp'

function Offer() {
  return (
    <section className='body-3'>
        <div className='sc-3-offer'>
        <div className='heading'>
         <h1>programs we offer</h1>
         <p>Maecenas felis felis, vulputate sit amet mauris et, semper aliquam ligula. Integer efficitur tellus<br/> metus, sed feugiat leo posuere ac. Morbi vitae tincidunt mi, et malesuada massa.</p>
         </div>
         <div className='off-box'>
           <div className='off-box-1'>
            <div className='content-main'>
                <div className='blog-img'>
                    <img src={blog1} className='blog-image'/>
                </div>
                <div className='blog-caption'>
                   <h3> <a href='#' className='head'>Faculty of Science</a></h3>
                   <p>Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi vitae<br/> tincidunt mi, et malesuada massa. Sed blandit placerat elit sit amet<br/> condimentum</p>
                   <a href='#' className='browser-btn-3'>Learn more</a> 
                </div>
            </div>
           </div>
         

         
           <div className='off-box-2'>
            <div className='content-main'>
                <div className='blog-img'>
                    <img src={blog2} className='blog-image'/>
                </div>
                <div className='blog-caption'>
                   <h3> <a href='#' className='head'>Faculty of Arts</a></h3>
                   <p>Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi vitae<br/>tincidunt mi, et malesuada massa. Sed blandit placerat elit sit amet<br/> condimentum</p>
                   <a href='#' className='browser-btn-3'>Learn more</a> 
                </div>
            </div>
           </div>
         </div>
         </div>
         </section>
  )
}

export default Offer;
