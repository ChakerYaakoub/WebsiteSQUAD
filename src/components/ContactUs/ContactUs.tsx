import React from "react";
import { ContactUsProps, useContactUs } from "./useContactUs";
import "./ContactUs.css";
import { NavItemsEnum } from "../../utils/navItems";
import {
  IoCallOutline,
  IoGlobeOutline,
  IoLocationOutline,
  IoMailOutline,
} from "react-icons/io5";
import { MdOutlineWhatsapp } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { messageTo, whatsappMessage } from "../../utils/utilsFc";

const ContactUs: React.FC<ContactUsProps> = (props) => {
  // eslint-disable-next-line no-empty-pattern
  const { contactUs } = useContactUs(props);
  // console.log("Data from ContactUs:", data);

  return (
    <>
      <section
        className="section contact"
        id={NavItemsEnum.ContactUs}
        aria-label="contact"
      >
        <div className="container">
          <div>
            <p className="section-subtitle">Contact</p>

            <h2 className="h2 section-title">Get In Touch</h2>
          </div>
          <div></div>
        </div>
        <div className="container">
          <div className="contact-content">
            <ul className="contact-list">
              {/* location */}

              <li
                className={`contact-item ${contactUs.location ? "" : "hidden"}`}
              >
                <IoLocationOutline className="react-icon" />
                <address className="contact-link toUppercase">
                  {contactUs.location}
                </address>
              </li>

              {/* phone */}

              <li
                className={`contact-item ${
                  contactUs.telephone ? "" : "hidden"
                }`}
              >
                <IoCallOutline className="react-icon" />

                <a
                  href={`tel:${contactUs.telephone}`}
                  className="contact-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  {contactUs.telephone}
                </a>
              </li>
              {/* whatsapp */}

              <li
                className={`contact-item ${contactUs.whatsapp ? "" : "hidden"}`}
              >
                <MdOutlineWhatsapp className="react-icon" />
                <a
                  href={whatsappMessage(contactUs.whatsapp)}
                  className="contact-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Chat on WhatsApp
                </a>
              </li>

              {/* url or github  */}

              <li
                className={`contact-item ${contactUs.website ? "" : "hidden"} `}
              >
                {contactUs.website?.includes("github") ? (
                  <FaGithub className="react-icon" />
                ) : (
                  <IoGlobeOutline className="react-icon" />
                )}

                <a
                  href={contactUs.website}
                  target="_blank"
                  className="contact-link disableToUppercase"
                  rel="noreferrer"
                >
                  {contactUs.website?.includes("github") ? (
                    contactUs.website.replace(/^https?:\/\//, "")
                  ) : (
                    <> {contactUs.website} </>
                  )}
                </a>
              </li>
              <br />
            </ul>
          </div>

          <div className="contact-content">
            <ul className="contact-list">
              <li className="contact-item">
                <p className="section-text">
                  <span className="font-bold text-black-2 inline-flex">
                    {" "}
                    <b> Feel free to contact us </b>
                  </span>
                </p>
              </li>
              <li className="contact-item">
                <p className="section-text">
                  <span className="font-bold text-black-2 inline-flex">
                    {" "}
                    <b> Availability : </b>
                  </span>
                  I am available for calls Monday through Friday, from 9:00 a.m.
                  to 8:00 p.m. (ET).
                </p>
              </li>

              {/* email */}

              <li className={`contact-item ${contactUs.email ? "" : "hidden"}`}>
                <IoMailOutline className="react-icon" />

                <a
                  href={messageTo(contactUs.email)}
                  target="_blank"
                  className="contact-link disableToUppercase"
                  rel="noreferrer"
                >
                  {contactUs.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
