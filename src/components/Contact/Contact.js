import React, { useEffect, useRef } from "react";
import { CiLinkedin } from "react-icons/ci";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hwvmdx4",
        "template_1nehmfa",
        form.current,
        "LOgpfkt6DhS8e28P-"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section
      id="contact"
    >
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact-container">
        <div data-aos="flip-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center" className="contact-options">
          <article
          className="contact-option">
            <CiLinkedin className="contact-option-icon"></CiLinkedin>
            <h4>Linkedin</h4>
            <h5>Maksudur Rahman</h5>
            <a
              href="https://www.linkedin.com/in/maksudur-rahman-61b286215/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>
          <article
          className="contact-option">
            <RiMessengerLine className="contact-option-icon"></RiMessengerLine>
            <h4>Messenger</h4>
            <h5>Maksudur Rahman Prio</h5>
            <a
              href="https://www.facebook.com/maksudurrahman.prio.5"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>
          <article
          className="contact-option">
            <BsWhatsapp className="contact-option-icon"></BsWhatsapp>
            <h4>WhatsApp</h4>
            <h5>+88 01710372019</h5>
            <a
              href="https://api.whatsapp.com/send?phone=++8801710372019"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        <form 
        data-aos="flip-down"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
        ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your message"
            required
          ></textarea>
          <button type="submit" className="btn ">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
