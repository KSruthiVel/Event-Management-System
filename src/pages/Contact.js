import React from "react";
import emailjs from 'emailjs-com';
import ContactUs from "../assets/contact-us.jpg";
import "../styles/Contact.css";
import swal from 'sweetalert';

function Contact() {
  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_tuzlq4p','template_9xq5mas',
    e.target,'BU5ud8CMYqX9wNMNL').then(res=>{
      // console.log(res);
      swal({
        title: "Success!",
        text: "Sent message successfully",
        icon: "success",
        button: "OK!",
      });
    }).catch(err=>console.log(err));
  }
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${ContactUs})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form"  onSubmit={sendEmail}>
          <label htmlFor="name">Name</label>
          <input name="name" placeholder="John Doe" type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="jdn.doe@gmail.com" type="email" />
          <label htmlFor="event">What type of Event you want?</label>
          <textarea
            rows="2"
            placeholder="Corporate Event - Conference"
            name="event"
            required
          ></textarea>
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Specify the details of the event here . . . "
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
