import React, { useRef, useState } from 'react';
import '../Style.css'
import emailjs from '@emailjs/browser';

const Contactus = () => {
    const form = useRef();
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_yzw9hhy', 'template_sq28ygw', form.current, 'GZGpMXPuVsCOzZ_wk')
      .then(
        (result) => {
          console.log(result.text);
          setSuccessMessage('Message sent successfully!');
          setErrorMessage('');
        },
        (error) => {
          console.log(error.text);
          setSuccessMessage('');
          setErrorMessage('Failed to send the message. Please try again.');
        }
      );
  };
  return (
    <div>
        <section id="contact" className="contact">
  <div className="container" data-aos="fade-up">
    <div className="section-title">
      <h2>Contact</h2>
      <h3><span>Contact Us</span></h3>
    </div>
    <div className="row contact" data-aos="fade-up" data-aos-delay={100}>
      <div className="col-lg-6">
        <div className="info-box mb-4">
        <i class="bi bi-geo-alt-fill"></i>  
                <h3>Our Address</h3>
          <p>72(old no.49), 1st Floor, Cowley brown road, R S Puram, Coimbatore-641002</p>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="info-box  mb-4">
        <i class="bi bi-envelope-at-fill"></i>
                  <h3>Email Us</h3>
          <p>Mrdistributionservicescbe@gmail.com
</p>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="info-box  mb-4">
        <i class="bi bi-telephone-fill"></i>
                  <h3>Call Us</h3>
          <p>+91 9994 3194 36</p>
        </div>
      </div>
    </div>
    <div className="row" data-aos="fade-up" data-aos-delay={100}>
      <div className="col-lg-6 ">
      <iframe class="map mb-4 mb-lg-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15665.714643853273!2d76.92491627946532!3d11.006429906615958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85918cedcbebb%3A0x22d4f9c6beabaece!2s49%2C%201st%20St%2C%20R.S.%20Puram%2C%20Coimbatore%2C%20Tamil%20Nadu%20641003!5e0!3m2!1sen!2sin!4v1703935303894!5m2!1sen!2sin" frameborder="0" style={{
        border: ' 2px',
        width: '100%',
        height: '384px',
      }} allowfullscreen></iframe>      </div>
      <div className="col-lg-6">
        <form ref={form} onSubmit={sendEmail} className="php-email-form" noValidate>
          <div className="row">
            <div className="col form-group">
              <input type="text" name="from_name" className="form-control" id="name" placeholder="Your Name" required />
            </div>
            <div className="col form-group">
              <input type="email" className="form-control" name="from_email" id="email" placeholder="Your Email" required />
            </div>
          </div>
          <div className="form-group">
            <input type="text" className="form-control" name="from_name" id="subject" placeholder="Subject" required />
          </div>
          <div className="form-group">
            <textarea className="form-control" name="message" rows={5} placeholder="Message" required defaultValue={""} />
          </div>
          <div className="my-3">
            <div className="loading">Loading</div>
            <div className="error-message" />
            <div className="sent-message">Your message has been sent. Thank you!</div>
          </div>
          <div className="text-center"><button type="submit">Send Message</button></div>
          {successMessage && <p className="text-success">{successMessage}</p>}
      {errorMessage && <p className="text-danger">{errorMessage}</p>}
        </form>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Contactus