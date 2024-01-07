import React from 'react'
import './Starter.css'


function Starter(props) {
  const{heading, paragraph}=props
  return (
    <div className='body'>
      <div className='main'>
        <div className='content'>
        <div className='caption'>
          <h2>{heading}</h2>
          <p>{paragraph}</p>
        </div>
        </div>
        </div>
    
      </div>




    
  )
}
export default Starter;
