// eslint-disable-next-line
import {useForm, validationError} from '@formspree/react';
import './style/contact.css';
const Contact = () => {
  const [state,handleSubmit] = useForm("xyyrzzrn");
  
  return (
    <div className="about contact">
      <h2>Contact Me</h2>
      <div className="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22950.64205128044!2d78.0868589027838!3d27.87669262711131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974a48686459c8b%3A0x95d967276d323613!2sAligarh%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1692977127321!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="jsx-a11y/iframe-has-title">
    </iframe>
      </div>
      <div className="contact-form">
        <h2>Contact Form</h2>
        <form action="" onSubmit={handleSubmit}>
          <input type="text" id="name" name="name" placeholder="Your name here" />
          <validationError prefix="Name" field="name" errors={state.errors} />
          <input type="email" id="email" name="email" placeholder="Your email here" />
          <validationError prefix="Email" field="email" errors={state.errors} />
          <textarea id="message" name="message" cols="30" rows="6" placeholder="Message Here"></textarea>
          <validationError prefix="Message" field="message" errors={state.errors} />
          <button type="submit" disabled={state.submitting} >Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact

          
 