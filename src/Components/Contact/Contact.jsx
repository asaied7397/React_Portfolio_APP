import React from "react";
import "./Contact.css";
import Theme_pattern from "../../assets/theme_pattern.svg";
import message_icon from "../../assets/mail_icon.svg";
import phone_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "9349a363-64c0-4109-b8e1-bb1b651d0160");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get In Touch</h1>
        <img src={Theme_pattern} alt="" />
      </div>
      <div className="contact-container">
        <div className="contact-left">
          <h1>Lets's talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to
            send me a message abut anything that you want me to work on. You can
            contact anytime.
          </p>
          <div className="contact-details">
            <img src={message_icon} alt="" />
            <p>asaied7397@gmail.com</p>
          </div>
          <div className="contact-details">
            <img src={phone_icon} alt="" />
            <p>+2011-4764-5016</p>
          </div>
          <div className="contact-details">
            <img src={location_icon} alt="" />
            <p>Cairo, Egypt</p>
          </div>
        </div>
        <div className="contact-right">
          <form onSubmit={onSubmit} className="contact-form">
            <label htmlFor="name">Your Name :</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Your Name"
            />
            <label htmlFor="email">Your E-Mail :</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Your Email"
            />
            <label htmlFor="message">Your Message :</label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter Your Message"
            ></textarea>
            <button>Submit Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
