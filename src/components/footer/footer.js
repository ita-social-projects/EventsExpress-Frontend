import React, { useState } from "react";
import { IoMdSend } from "react-icons/io";
import "./footer.scss";
import emailjs from "@emailjs/browser";
import { FOOTER_LABELS } from "../../constants/footerConstants";
import SOCIAL_NAV_LINKS from "./footer-mapper";

const {
  SUBSCRIBE_US,
  CONTACT_US,
  PHONE_NUMBER,
  PASTE_YOUR_EMAIL,
  OUR_SOCIALS,
  MAIN_TEXT,
  CALL_PHONE_HREF,
} = FOOTER_LABELS;

const Footer = () => {
  const [values, setValues] = useState({
    email: "",
  });
  const subscribeWithEmail = e => {
    e.preventDefault();
    emailjs
      .send("service_hxod138", "template_1k257d8", values, "hIa6EbQItOhL_Sxmg")
      .then(
        result => {
          // eslint-disable-next-line no-console
          console.log(result.text);
        },
        error => {
          // eslint-disable-next-line no-console
          console.log(error.text);
        },
      );
    setValues({ email: "" });
  };
  const handleChange = e => {
    e.persist();
    // eslint-disable-next-line no-shadow
    setValues(values => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <footer className="footer__container">
      <div className="footer__inner">
        <div className="footer__head">
          <h1 className="head__text">{MAIN_TEXT}</h1>
        </div>
        <div className="footer__interact">
          <div className="footer__contacts">
            <h2 className="contact__us">{CONTACT_US}</h2>
            <a href={CALL_PHONE_HREF} className="contact__number">
              {PHONE_NUMBER}
            </a>
          </div>
          <div className="footer__subscribe">
            <h4 className="subscibe__us">{SUBSCRIBE_US}</h4>
            <form className="footer__form">
              <input
                type="email"
                name="email"
                onChange={e => handleChange(e)}
                value={values.email}
                placeholder={PASTE_YOUR_EMAIL}
                className="footer__input"
              />
              <IoMdSend
                onClick={subscribeWithEmail}
                className="footer__subscribe__icon"
              />
            </form>
          </div>
          <div className="footer__social_links">
            <h4 className="our__socials">{OUR_SOCIALS}</h4>
            <div className="footer__social_links_icons">{SOCIAL_NAV_LINKS}</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
