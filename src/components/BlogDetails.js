import React from 'react'
import './BlogDetails.css'
import preview from './Assets/preview.jpg.webp'
import next from './Assets/next.jpg.webp'
import author from './Assets/author.png.webp'
import comment_1 from './Assets/comment_1.png.webp'
import comment_2 from './Assets/comment_2.png.webp'
import comment_3 from './Assets/comment_3.png.webp'
import { FaBehance, FaDribbble, FaFacebook, FaHeart, FaTwitter } from 'react-icons/fa';

function BlogDetails  ()  {
  return (
    <div className='blog-details'>
      <div className='blog-details-container'>
        <div className='navigation'>
          <div className='navigation-title'>
            <p className='like-info'>
             <span className='heart-icon'><FaHeart/></span>
             Lily and 4 people Like this
            </p>
            <div className='center'></div>
            <ul className='navigation-social-icons'>
              <li><a href='#'><FaFacebook className='nav-icon'/></a></li>
              <li><a href='#'><FaTwitter className='nav-icon'/></a></li>
              <li><a href='#'><FaDribbble className='nav-icon'/></a></li>
              <li><a href='#'><FaBehance className='nav-icon'/></a></li>
            </ul>
          </div>
          <div className='navigation-area'>
          <div className='navigation-area-row'>
            <div className='navigation-area-one'>
              <div className='thumb-nav'>
                <a href='#'><img stc={next}/></a>
              </div>
              <div className='arrow-nav'>
                <a href='#'><span className='white-arrow'></span></a>
              </div>
              <div className='details-nav'>
                <p>Prev Post</p>
                <a href='#'>Space the final Frontier</a>
              </div>
            </div>
            <div className='navigation-area-two'>
              <div className='details'>
                <a href='#'><h4>Telescopes 101</h4></a>
              </div>
              <div className='arrow'>
                <a href='#'><span className='arrow-right'></span></a>
              </div>
              <div className='thumb'>
                <a href='#'><img src={next}/></a>
              </div>
            </div>
          </div>
          </div>
        </div>

        <div className='blog-author'>
          <div className='blog-author-content'>
            <img src={author}/>
            <div className='blog-author-media'>
              <a href='#'><h4>Harvard milan</h4></a>
              <p>Second divided from form fish beast made.
                 Every of seas all gathered use saying you're,
                  he our dominion twon Second divided from</p>
            </div>
          </div>
        </div>
        <div className='comments-area'>
          <h4>05 comments</h4>
          <div className='comment-list'>
            <div className='comment-list-body'>
              <div className='comment-area-content'>
                <div className='thumb'>
                  <img src={comment_1}/>
                </div>
                <div className='desc'>
                  <p className='comment'>
                    Multiply sea night grass fourth day sea 
                    lesser rule open subdue female fill which 
                    them Blessed, give fill lesser bearing multiply sea 
                    night grass fourth day sea lesser
                  </p>
                  <div className='comment-area-bottom'>
                    <div className='bottom-content'>
                      <h5><a href='#'>Emilly Blunt</a></h5>
                      <p className='date-bottom'>December 4, 2017 at 3:12pm</p>
                    </div>
                    <div className='reply-btn'>
                      <a href='#' className='reply-btn-link'>reply</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='comment-list'>
          <div className='comment-list-body'>
              <div className='comment-area-content'>
                <div className='thumb'>
                  <img src={comment_2}/>
                </div>
                <div className='desc'>
                  <p className='comment'>
                    Multiply sea night grass fourth day sea 
                    lesser rule open subdue female fill which 
                    them Blessed, give fill lesser bearing multiply sea 
                    night grass fourth day sea lesser
                  </p>
                  <div className='comment-area-bottom'>
                    <div className='bottom-content'>
                      <h5><a href='#'>Emilly Blunt</a></h5>
                      <p className='date-bottom'>December 4, 2017 at 3:12pm</p>
                    </div>
                    <div className='reply-btn'>
                      <a href='#' className='reply-btn-link'>reply</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='comment-list'>
          <div className='comment-list-body'>
              <div className='comment-area-content'>
                <div className='thumb'>
                  <img src={comment_3}/>
                </div>
                <div className='desc'>
                  <p className='comment'>
                    Multiply sea night grass fourth day sea 
                    lesser rule open subdue female fill which 
                    them Blessed, give fill lesser bearing multiply sea 
                    night grass fourth day sea lesser
                  </p>
                  <div className='comment-area-bottom'>
                    <div className='bottom-content'>
                      <h5><a href='#'>Emilly Blunt</a></h5>
                      <p className='date-bottom'>December 4, 2017 at 3:12pm</p>
                    </div>
                    <div className='reply-btn'>
                      <a href='#' className='reply-btn-link'>reply</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

       {/* comment form = contact us */}

      </div>
    </div>
  )
}
export default BlogDetails;
