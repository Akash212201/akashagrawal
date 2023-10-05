import { useState } from 'react';
import './style/contact.css';
const Contact = () => {
  const [data,setData] = useState({Name: "", email:"", message:""});
  
  const dataHandler=(e)=>{
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
  }
  const submitHandler = async(e) => {
    e.preventDefault();
    // eslint-disable-next-line
    const response= await fetch('http://localhost:8000/demo',{
      method:'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body:JSON.stringify(data)
    })
    await response.json();
    setData({Name: "", email:"", message:""})
  };
  return (
    <div className="about contact">
      <h1>Contact Me</h1>
      <div className="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22950.64205128044!2d78.0868589027838!3d27.87669262711131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974a48686459c8b%3A0x95d967276d323613!2sAligarh%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1692977127321!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="jsx-a11y/iframe-has-title">
    </iframe>
      </div>
      <div className="contact-form">
        <h2>Contact Form</h2>
        <form action="" onSubmit={submitHandler}>
          <input type="text" name="Name" placeholder="Your name here" value={data.Name} onChange={dataHandler} />
          <input type="email" name="email" placeholder="Your email here" value={data.email} onChange={dataHandler} />
          <textarea name="message" cols="30" rows="6" placeholder="Message Here" value={data.message} onChange={dataHandler}></textarea>
          <button value="Send">Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact