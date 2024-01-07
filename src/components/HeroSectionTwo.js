import React from 'react'
import './HeroSectionTwo.css'
import class_img from './Assets/class-img1.jpg.webp'
import class_img2 from './Assets/class-img2.jpg.webp'
import class_img3 from './Assets/class-img3.jpg.webp'
import partner from './Assets/partner-1.png'

function HeroSectionTwo ()  {
  return (
    <div>
    <section className='body-5'>
    <div className='container-s5'>
        <div className='content-main-s5'>
         <div className='content-sub'>
            <div className='head-s5'>
               <h2>Top Stories</h2> 
               <a href='#' className='s5-btn'>More Details</a>
            </div>
            
         </div>
        </div>

    <div className='content-main-s5'>
       <div className='box-1'>
        <div className='main'>
            <div className='sub'>
                <div className='box-img'><a href='#'><img src={class_img}/></a></div>
                <div className='box-caption'><a href='#'><p>Linguistics alumna says recognizing<br/> Indigenous Languages Day is crucial to our<br/> histories</p></a></div>
            </div>
        </div>
        </div> 

       <div className='box-1'>
       <div className='main'>
            <div className='sub'>
                <div className='box-img'><a href='#'><img src={class_img2}/></a></div>
                <div className='box-caption'><a href='#'><p>Linguistics alumna says recognizing<br/> Indigenous Languages Day is crucial to our<br/> histories</p></a></div>
            </div>
        </div>
        </div> 

        <div className='box-1'>
       <div className='main'>
            <div className='sub'>
                <div className='box-img'><a href='#'><img src={class_img3}/></a></div>
                <div className='box-caption'><a href='#'><p>Linguistics alumna says recognizing<br/> Indigenous Languages Day is crucial to our<br/> histories</p></a></div>
            </div>
        </div>
        </div> 

        
    </div>

    </div>
   </section>
    
<section className='body-6'>
    <div className='container-partner'>
     <div className='content'>
        <div className='main-content'>
            <div className='content-title'>
                <h2>OUR PARTNERS</h2>
                <p>Maecenas felis felis, vulputate sit amet mauris et, semper aliquam ligula. Integer efficitur tellus metus, sed<br/> feugiat leo posuere.</p>
            </div>
        </div>
     </div>
     <div className='partner'>
        <div className='content-p'>
            
        </div>       
    </div>
    </div>
</section>
</div>
  )
}

export default HeroSectionTwo;
