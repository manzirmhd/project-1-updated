import React from "react";
import './CardBlog.css'
import card_img from './Assets/single_blog_1.jpg.webp'
import card_img2 from './Assets/single_blog_2.jpg.webp'
import card_img3 from './Assets/single_blog_3.jpg.webp'
import card_img4 from './Assets/single_blog_4.jpg.webp'
import card_img5 from './Assets/single_blog_5.jpg.webp'

import { FaComment, FaUser } from 'react-icons/fa';

function CardBlog(){
  
    return(
<div className="card-body">
  <div className="card">
    <div className="image">
 <img src={card_img} className="card-image"/>
 <a href="#" className="card-link">
    <h3>15</h3>
    <p>Jan</p>
 </a>
    </div>
    <div className="card-content">
  <a href="#" className="content-link">
    <h2>Google links pact for new 35-storey office</h2>
  </a>
  <p>That dominion stars lights dominion divide 
    years for fourth have don't stars is that
    he earth it first without heaven in place seed
    it second morning saying.</p>
    <ul className="card-list">
        <li>
        <a href="#" className="card-link-2">
        <FaUser className="card-link-icon"/>
        Travel, Lifestyle
        </a> 
        </li> 

        <li>
        <a href="#" className="card-link-2">
        <FaComment className="card-link-icon"/>
        03 Comments
        </a> 
        </li> 
    </ul>
    </div>
    </div>

    
<div className="card">
    <div className="image">   
 <img src={card_img2} className="card-image"/>
 <a href="#" className="card-link">
    <h3>15</h3>
    <p>Jan</p>
 </a>
    </div>
    <div className="card-content">
  <a href="#" className="content-link">
    <h2>Google links pact for new 35-storey office</h2>
  </a>
  <p>That dominion stars lights dominion divide 
    years for fourth have don't stars is that
    he earth it first without heaven in place seed
    it second morning saying.</p>
    <ul className="card-list">
        <li>
        <a href="#" className="card-link-2">
        <FaUser className="card-link-icon"/>
        Travel, Lifestyle
        </a> 
        </li> 

        <li>
        <a href="#" className="card-link-2">
        <FaComment className="card-link-icon"/>
        03 Comments
        </a> 
        </li> 
    </ul>
    </div>
    </div>



    <div className="card">
    <div className="image">
 <img src={card_img3} className="card-image"/>
 <a href="#" className="card-link">
    <h3>15</h3>
    <p>Jan</p>
 </a>
    </div>
    <div className="card-content">
  <a href="#" className="content-link">
    <h2>Google links pact for new 35-storey office</h2>
  </a>
  <p>That dominion stars lights dominion divide 
    years for fourth have don't stars is that
    he earth it first without heaven in place seed
    it second morning saying.</p>
    <ul className="card-list">
        <li>
        <a href="#" className="card-link-2">
        <FaUser className="card-link-icon"/>
        Travel, Lifestyle
        </a> 
        </li> 

        <li>
        <a href="#" className="card-link-2">
        <FaComment className="card-link-icon"/>
        03 Comments
        </a> 
        </li> 
    </ul>
    </div>
    </div>


  <div className="card">
    <div className="image">
 <img src={card_img4} className="card-image"/>
 <a href="#" className="card-link">
    <h3>15</h3>
    <p>Jan</p>
 </a>
    </div>
    <div className="card-content">
  <a href="#" className="content-link">
    <h2>Google links pact for new 35-storey office</h2>
  </a>
  <p>That dominion stars lights dominion divide 
    years for fourth have don't stars is that
    he earth it first without heaven in place seed
    it second morning saying.</p>
    <ul className="card-list">
        <li>
        <a href="#" className="card-link-2">
        <FaUser className="card-link-icon"/>
        Travel, Lifestyle
        </a> 
        </li> 

        <li>
        <a href="#" className="card-link-2">
        <FaComment className="card-link-icon"/>
        03 Comments
        </a> 
        </li> 
    </ul>
    </div>
    </div>


  <div className="card">
    <div className="image">
 <img src={card_img5} className="card-image"/>
 <a href="#" className="card-link">
    <h3>15</h3>
    <p>Jan</p>
 </a>
    </div>
    <div className="card-content">
  <a href="#" className="content-link">
    <h2>Google links pact for new 35-storey office</h2>
  </a>
  <p>That dominion stars lights dominion divide 
    years for fourth have don't stars is that
    he earth it first without heaven in place seed
    it second morning saying.</p>
    <ul className="card-list">
        <li>
        <a href="#" className="card-link-2">
        <FaUser className="card-link-icon"/>
        Travel, Lifestyle
        </a> 
        </li> 

        <li>
        <a href="#" className="card-link-2">
        <FaComment className="card-link-icon"/>
        03 Comments
        </a> 
        </li> 
    </ul>
    </div>
    </div>
</div>

    )
}
export default CardBlog;