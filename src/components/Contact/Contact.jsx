import React from "react";

//CSS
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">
                lavro.nikita123@gmail.com
              </span>
            </div>
            <div className="contact__card">
              <i className="bx bxl-telegram contact__card-icon"></i>
              <h3 className="contact__card-title">Telegram</h3>
              <span className="contact__card-data">@nikitalavro1</span>
            </div>
            <div className="contact__card">
              <i className="bx bxs-phone-call contact__card-icon"></i>
              <h3 className="contact__card-title">Phone</h3>
              <span className="contact__card-data"> +380 (97) 119 78 04</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
