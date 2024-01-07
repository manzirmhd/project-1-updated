import React from 'react'
import CardBlog from './CardBlog'
import Starter from './Starter'
import Footer from './Footer'
import Navbar from './Navbar'

function Blog() {
  return (
    <div>
        <Navbar></Navbar>
<Starter
     heading="Blog"
     paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Suspendisse varius enim in eros elementum tristique."
     ></Starter>
     <CardBlog></CardBlog>
     <Footer></Footer>

    </div>
  )
}

export default Blog