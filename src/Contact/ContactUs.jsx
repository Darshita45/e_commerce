import React from 'react';
import emailjs from 'emailjs-com';

import './styles.css';

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_jhbbhnt', 'template_muifc61', e.target, 'user_TCQh96KrTTvHjAmE1Bgeu')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  return (
    <>
    <div className="heading">
      <p>Cancel Your Order Here</p>
    </div>
    <form onSubmit={sendEmail}>
      <ul className="form-style-1">
          <li><label>Full Name <span className="required">*</span></label><input type="text" name="from_name" className="field-long" placeholder="Enter your name" required/></li>
          <li>
              <label>Email <span className="required">*</span></label>
              <input type="email" name="email" placeholder="Enter yout email" className="field-long" />
          </li>
          <li>
              <label>Order Number <span className="required">*</span></label>
              <input type="text" name="order_id" placeholder="Enter the order number" className="field-long" required/>
          </li>
          {/* <li>
              <label>To name <span className="required">*</span></label>
              <input type="text" name="to_name" placeholder="Enter to name" className="field-long" required/>
          </li> */}
          {/* <li>
              <label>Subject</label>
              <select name="field4" className="field-select">
              <option value="Advertise">Advertise</option>
              <option value="Partnership">Partnership</option>
              <option value="General Question">General</option>
              </select>
          </li> */}
          <li>
              <label>Your Message <span className="required">*</span></label>
              <textarea name="message" id="field5" placeholder="Tell us why you want to cancel your order" className="field-long field-textarea"></textarea>
          </li>
          <li>
              <input type="submit" value="Submit" />
          </li>
      </ul>
    </form>
    </>
  );
}