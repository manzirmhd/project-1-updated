import React from 'react'
import './HeroSection.css'
import about1 from './Assets/about1.jpg.webp'
import visit from './Assets/visit1.jpg.webp'
import { CiCircleChevRight } from "react-icons/ci";




function HeroSection (){
  return (

    <div className='HeroSection'>
        <section className='body-two'>
        <div className='container'>
           <div className='cont-box'>
            <div className='cont-box-1'>
                <div className='cont-box-1-img'>
                    
                </div>
            </div>

            <div className='cont-box-2'>
                <div className='cont-box-2-content'>
                    <div className='title'>
                        <h2>A COMPREHENSIVE<br/> TEACHING APPROACH</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas felis felis, vulputate sit amet mauris et, semper aliquam ligula. Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi vitae tincidunt malesuada massa.</p>
                        <p>Maecenas felis felis, vulputate sit amet mauris et, semper aliquam ligula. Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi vitae tincidunt mi, et malesuada massa.</p>
                        <a href='#' className='browser-btn'>Learn More</a>
                    </div>
                </div>
            </div>
            </div> 
        </div>
        </section>

        <section className='body-4'>
        <div className='sc-4-resources'>
        <div className='section-4-heading'>
             <h1>Essential Resources</h1>
             <p>Maecenas felis felis, vulputate sit amet mauris et, semper aliquam ligula.<br/> Integer efficitur tellus metus, sed feugiat leo posuere.</p>
            </div>  
            <div className='content-box'>
                 <div className='content-box-a'>
                 <div className='content-box-body'>
                    <div className='body-1'>
                        <h3>First Year Students</h3>
                        <p>Integer efficitur tellus metus, sed feugiat leo posuere ac.<br/>
                        Morbi vitae tincidunt mi, et malesuada massa.</p>
                    </div>
                    <a href='#'><CiCircleChevRight className='icon-right'/></a>
                 </div>
                </div>
            </div>

            <div className='content-box'>
                <div className='content-box-a'>
                 <div className='content-box-body'>
                    <div className='body-1'>
                        <h3>Tuition & Fees </h3>
                        <p>Integer efficitur tellus metus, sed feugiat leo posuere ac.<br/>
                           Morbi vitae tincidunt mi, et malesuada massa.</p>
                    </div>
                    <a href='#'><CiCircleChevRight className='icon-right'/></a>
                 </div>
                </div>
            </div>

            <div className='content-box'>
                <div className='content-box-a'>
                 <div className='content-box-body'>
                    <div className='body-1'>
                        <h3>International Students</h3>
                        <p>Integer efficitur tellus metus, sed feugiat leo posuere ac.<br/>
                           Morbi vitae tincidunt mi, et malesuada massa.</p>
                    </div>
                    <a href='#'><CiCircleChevRight className='icon-right'/></a>
                 </div>
                </div>
            </div>
            
           </div>
           <div className='sc-4-resources-2'><img src={visit}/></div>
        </section>
    </div>
  )
}

export default HeroSection