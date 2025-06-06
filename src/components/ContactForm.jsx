import React from 'react'
import { useState } from 'react';

const ContactForm = () => {

    //const [fullName, setFullName] = useState("");
    //const [email, setEmail] = useState("");
    //const [message, setMessage] = useState("");

    const [contact, setContact] = useState({
        FullName: "",
        Email: "",
        Message: ""
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setContact((prevContact) => ({
            ...prevContact,
            [name]: value
        }));
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const formData = {
        FullName: contact.FullName,
        Email: contact.Email,
        Message: contact.Message
        };

        console.log("Form Data Submitted: ", formData);
        
        // Reset the form fields after submission
        setContact({
        FullName: "",
        Email: "",
        Message: ""
    });
};
  return (
    <section className="contact">
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>We would love to hear from you!</p>
      </header>
      <section className='form'>
        <form onSubmit={handleFormSubmit}>
          <div>
            <input type="text" name='FullName' placeholder="Your Name" 
              className='contact-input'
              autoComplete='off'
              required
              value={contact.fullName}
              //onChange={(e) => setFullName(e.target.value)}
              onChange={handleInputChange}
            />
            <input type="email" name="Email" placeholder="Your Email" 
              className='contact-input'
              autoComplete='off'
              required
              value={contact.email}
              //onChange={(e) => setEmail(e.target.value)}
              onChange={handleInputChange}
            />
            <textarea name='Message' placeholder="Your Message" 
              className='contact-textarea'
              autoComplete='off'
              required
              value={contact.message}
              //onChange={(e) => setMessage(e.target.value)}
              onChange={handleInputChange}
            ></textarea>
            <div className='button'>
              <button type="submit">Send Message</button>
            </div>
          </div>
        </form>
      </section>
    </section>
  )
}

export default ContactForm;