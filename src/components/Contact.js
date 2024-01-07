// App.js
import React, { useState } from 'react';
import './Contact.css'
import Starter from './Starter';
import Footer from './Footer';
import Navbar from './Navbar';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log('Form Data:', formData);
    
  };

  return (

   <div className='contact-body'>
    <Navbar></Navbar>
     <Starter
    heading="Contact"
    paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Suspendisse varius enim in eros elementum tristique."
    ></Starter>

    <div className="contact-us">
       <h1>Get In Touch</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
       
       <div className='input-group'>
      <label htmlFor="message"></label>
        <textarea 
        rows={8}
          placeholder='Enter Your Message'
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        /></div>


        <div className='row'>
          <div className='input-group'>
        <label htmlFor="name"></label>
        <input
        placeholder='Your Name'
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        /></div>

        <div className='input-group'>
        <label htmlFor="email"></label>
        <input
        placeholder='Your Email'
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        /></div>
        </div>

      <div className='input-group'>
       <label htmlFor="subject"></label>
        <input
        placeholder='Enter Subject'
          id="message"
          name="subject"
          value={formData.name}
          onChange={handleChange}
          required
        /></div>

       
        <button type="submit">SEND</button>
      </form>

      
    </div>
    <Footer></Footer>
    </div>
  );
};

export default Contact;