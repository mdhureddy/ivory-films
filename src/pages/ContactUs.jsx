import React, { useRef, useState } from "react";
import "../styles/Contact.css";
import { FormValid } from "./Validation";
import emailjs from '@emailjs/browser';
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;
const TEMPLETE_ID = import.meta.env.VITE_TEMPLETE_ID;
const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
import { ToastContainer, toast } from 'react-toastify';
function Contact() {
  const UserForm = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    weddingDetails: "",
    location: "",
    date: "",
    days: "",
  });

  const [errorData,setErrorData]=useState([])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    const error=FormValid(formData);
    if(Object.keys(error).length===0){
      try {
        const res=await emailjs.sendForm(SERVICE_ID,TEMPLETE_ID,UserForm.current,{publicKey:PUBLIC_KEY});
        console.log(res);
        toast("ThankYou for your registration.",{
      style: {
        backgroundColor: "#4df53b",
        color: "white",
      },})
        setFormData({
          name: "",
          email: "",
          whatsapp: "",
          weddingDetails: "",
          location: "",
          date: "",
          days: "",
      })
      setErrorData([])
      } catch (error) {
        toast('Internal Server Error',{
           style: {
        backgroundColor: "#f0140c",
        color: "black",
      },
        });
      }
      
    }else{
      setErrorData(error)
    }
    
  };

  return (
    <div className="contact-page">
      <ToastContainer />
      <div className="contact-container">
        {/* --- Info Section on Top --- */}
        <div className="contact-info">
          <p>
            Please complete the form below and provide as many details as possible to help us create
            an accurate estimate. We aim to respond within 48 hours. If you do not hear from us or if
            it is an urgent inquiry, please call us at the number below.
          </p>

          <p>
            Please review our <a href="/faqs" className="faq-link">FAQ</a> section to find answers to some frequently asked questions.
          </p>

          <p className="contact-email">hello@ivoryfilms.in</p>
          <p className="contact-phone">+91 9737188899</p>
          <p className="contact-locations">Surat • Mumbai • Hyderabad</p>
        </div>

        {/* --- Contact Form --- */}
        <h2 className="contact-title">Get In Touch</h2>

        <form ref={UserForm} onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label>Name*</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange}  />
            <span>{errorData.nameErr}</span>
          </div>

          <div className="form-group">
            <label>Email*</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange}  />
            <span>{errorData.emailErr}</span>
          </div>

          <div className="form-group">
            <label>🇮🇳 +91 &nbsp; Whatsapp No.*</label>
            <input type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange}  />
            <span>{errorData.whatsappErr}</span>
          </div>

          <div className="form-group">
            <label>Tell us more about your wedding – event flow, venues.*</label>
            <textarea name="weddingDetails" value={formData.weddingDetails} onChange={handleChange}  />
            <span>{errorData.detailsErr}</span>
          </div>

          <div className="form-group">
            <label>Location of the wedding*</label>
            <input type="text" name="location" value={formData.location} onChange={handleChange}  />
            <span>{errorData.locationErr}</span>
          </div>

          <div className="form-row">
            <div className="form-group half">
              <label>Wedding Date* (e.g. 31/12/2024)</label>
              <input type="date" name="date" value={formData.date} onChange={handleChange}  />
              <span>{errorData.dateErr}</span>
            </div>

            <div className="form-group half">
              <label>No. of Days*</label>
              <input type="number" name="days" value={formData.days} onChange={handleChange}  />
              <span>{errorData.daysErr}</span>
            </div>
          </div>

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
