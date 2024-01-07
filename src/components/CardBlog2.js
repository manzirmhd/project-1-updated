import React from 'react'
import './CardBlog2.css'
import 'bootstrap/dist/css/bootstrap.css';
import post1 from './Assets/post_1.jpg.webp'
import post2 from './Assets/post_2.jpg.webp'
import post3 from './Assets/post_3.jpg.webp'
import post4 from './Assets/post_4.jpg.webp'
import post5 from './Assets/post_5.jpg.webp'
import post6 from './Assets/post_6.jpg.webp'
import post7 from './Assets/post_7.jpg.webp'
import post8 from './Assets/post_8.jpg.webp'
import post9 from './Assets/post_9.jpg.webp'
import post10 from './Assets/post_10.jpg.webp'

function CardBlog2  ()  {
  return (
    <div className='card-blog-2'>
        <div className='card-blog-2-container'>
        <aside className='side-search-bar'>
           <form action='#'>

            <div className='search-bar'>
                <div className='input-group'>
                <input type='text' placeholder='Search Keyword' className='form-control' />
                </div>
                <div className='input-group-1'>
                <button className='input-btn' type='button'>Search</button>
                </div>
            </div>

            </form> 
        </aside>

        <aside className='side-bar-category'>
            <h4 className='category-title'>Category</h4>
            <ul className='category-list'>
                <li>
                    <a href='#'className='category-link'>
                        <p>Restaurent Food</p>
                        <p>(37)</p>
                    </a>
                </li>
                <li>
                    <a href='#'className='category-link'>
                        <p>Health Care</p>
                        <p>(09)</p>
                    </a>
                </li>
                <li>
                    <a href='#'className='category-link'>
                        <p>Inspiration</p>
                        <p>(21)</p>
                    </a>
                </li>
                <li>
                    <a href='#'className='category-link'>
                        <p>Travel News</p>
                        <p>(10)</p>
                    </a>
                </li>
                <li>
                    <a href='#'className='category-link'>
                        <p>Modern Technology</p>
                        <p>(03)</p>
                    </a>
                </li>
                <li>
                    <a href='#'className='category-link'>
                        <p>Product</p>
                        <p>(11)</p>
                    </a>
                </li>
            </ul>

        </aside>

        <aside className='side-bar-media'>
            <h3 className='side-bar-media-title'>Recent Post</h3>
            <div className='media-post'>
                <img src={post1} className='media-image'/>
                <div className='media-content'>
                    <a href='#'>
                        <h3>Life was you fish...</h3>
                    </a>
                    <p>January 12 2019</p>
                </div>
            </div>

            <div className='media-post'>
                <img src={post2} className='media-image'/>
                <div className='media-content'>
                    <a href='#'>
                        <h3>The amazing hubble</h3>
                    </a>
                    <p>02 Hours ago</p>
                </div>
            </div>

            <div className='media-post'>
                <img src={post3} className='media-image'/>
                <div className='media-content'>
                    <a href='#'>
                        <h3>Astronomy or Astrology</h3>
                    </a>
                    <p>03 Hours ago</p>
                </div>
            </div>

            <div className='media-post'>
                <img src={post4} className='media-image'/>
                <div className='media-content'>
                    <a href='#'>
                        <h3>Asteroids Telescope</h3>
                    </a>
                    <p>01 Hours ago</p>
                </div>
            </div>
        </aside>

        <aside className='side-bar-clouds'>
            <h4 className='clouds-title'>Tag Clouds</h4>
            <ul className='cloud-list'>
                <li>
                    <a href='#'>Project</a>
                    <a href='#'>Love</a>
                    <a href='#'>Technology</a>
                    <a href='#'>Travel</a>
                    <a href='#'>Restaurent</a>
                    <a href='#'>Life style</a>
                    <a href='#'>Design</a>
                    <a href='#'>Illustration</a>
                </li>
            </ul>
        </aside>

        <aside className='side-bar-feed'>
            <h4 className='feed-title'>Instagram Feeds</h4>
            <ul className='feed-list'>
                <li><a href='#'><img src={post5} className='feed-image'/></a></li>
                <li><a href='#'><img src={post6} className='feed-image'/></a></li>
                <li><a href='#'><img src={post7} className='feed-image'/></a></li>
                <li><a href='#'><img src={post8} className='feed-image'/></a></li>
                <li><a href='#'><img src={post9} className='feed-image'/></a></li>
                <li><a href='#'><img src={post10} className='feed-image'/></a></li>
            </ul>
        </aside>

        <aside className='side-bar-form'>
            <h4 className='form-title'>NewsLetter</h4>
            <form action='#'>
            <div className='side-bar-form-group'>
                <input type='email' className='sd-form-control' placeholder='Enter Email'/>
            </div>
            <button className='sd-form-button' type='submit'>Subscribe</button>
            </form>
            
        </aside>
        </div>
    </div>
  )
}
export default CardBlog2;





