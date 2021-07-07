import React from 'react';
import emailjs from 'emailjs-com';

//import './ContactUs.css';

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_muifc61', e.target, 'user_TCQh96KrTTvHjAmE1Bgeu')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  return (
    <div>
      <div className="container">
        <div className="row pt-5 mx-auto">
          <div className="col-8 form-group mx-auto">
            <input type="text" className="form-control" placeholder="Name" name="from_name"/>
          </div>
          <div className="col-8 form-group mx-auto">
            <input type="email" className="form-control" placeholder="Name" name="from_name"/>
          </div>
          <div className="col-8 form-group mx-auto">
            <input type="text" className="form-control" placeholder="Name" name="from_name"/>
          </div>
          <div className="col-8 form-group mx-auto">
            <input type="text" className="form-control" placeholder="Name" name="from_name"/>
          </div>
          <div className="col-8 pt-3 mx-auto">
            <input type="submit" className="btn btn-info" placeholder="Name" name="from_name"/>
          </div>
        </div>
      </div>
    </div>
  );
}