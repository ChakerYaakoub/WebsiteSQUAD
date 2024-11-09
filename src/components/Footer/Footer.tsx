import { FooterProps, useFooter } from "./useFooter";
import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTiktok,
  FaTwitter,
  // FaWhatsapp,
} from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
// import { CiInstagram } from "react-icons/ci";
import { AiFillInstagram } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import { IoGlobeOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { messageTo } from "../../utils/utilsFc";

const Footer: React.FC<FooterProps> = (props) => {
  const { currentYear, data, whatsappMessage, defaultData } = useFooter(props);
  const footer = data || defaultData;
  if (!footer) return null;

  return (
    <footer className="footer">
      <div className="container">
        <p className="copyright">
          &copy; {currentYear + `    Powered by `}
          <a
            href="https://www.linkedin.com/in/chaker-yaakoub/"
            className="copyright-link"
            target="_blank"
            rel="noreferrer"
          >
            {"  "}
            Chaker Yaakoub.{" "}
          </a>{" "}
          All rights reserved.{" "}
        </p>

        {/* <p> 
          Powered by{" "}
          <a href="https://www.yourcompanywebsite.com">YourCompanyName</a>
        </p> */}

        <ul className="social-list">
          <li className={`${footer.linkedin ? "" : "hidden"}`}>
            <a
              href={footer.linkedin || ""}
              className={`social-link ${footer.linkedin ? "" : "hidden"}`}
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="react-icon" />
            </a>
          </li>
          {/* url or github  */}

          <li className={`${footer.website ? "" : "hidden"}`}>
            <a
              href={footer.website || ""}
              target="_blank"
              className={`social-link ${footer.website ? "" : "hidden"}`}
              rel="noreferrer"
            >
              {footer.website?.includes("github") ? (
                <FaGithub className="react-icon" />
              ) : (
                <IoGlobeOutline className="react-icon" />
              )}
            </a>
          </li>
          {/* Email  */}

          <li className={`${footer.email ? "" : "hidden"}`}>
            <a
              href={messageTo(footer.email)}
              className={`social-link ${footer.email ? "" : "hidden"}`}
              target="_blank"
              rel="noreferrer"
            >
              {/* <FaWhatsapp className="react-icon" />  */}
              <MdEmail className="react-icon" />
            </a>
          </li>

          <li className={`${footer.whatsapp ? "" : "hidden"}`}>
            <a
              href={whatsappMessage(footer.whatsapp)}
              className={`social-link ${footer.whatsapp ? "" : "hidden"}`}
              target="_blank"
              rel="noreferrer"
            >
              {/* <FaWhatsapp className="react-icon" />  */}
              <RiWhatsappFill className="react-icon" />
            </a>
          </li>

          <li className={`${footer.twitter ? "" : "hidden"}`}>
            <a
              href={footer.twitter}
              className={`social-link ${footer.twitter ? "" : "hidden"}`}
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter className="react-icon" />
            </a>
          </li>

          <li className={`${footer.youtube ? "" : "hidden"}`}>
            <a
              href={footer.youtube}
              className={`social-link ${footer.youtube ? "" : "hidden"}`}
              target="_blank"
              rel="noreferrer"
            >
              <TfiYoutube className="react-icon" />
            </a>
          </li>
          <li className={`${footer.facebook ? "" : "hidden"}`}>
            <a
              href={footer.facebook}
              className={`social-link ${footer.facebook ? "" : "hidden"}`}
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook className="react-icon" />
            </a>
          </li>

          <li className={`${footer.instagram ? "" : "hidden"}`}>
            <a
              href={footer.instagram}
              className={`social-link ${footer.instagram ? "" : "hidden"}`}
              target="_blank"
              rel="noreferrer"
            >
              {/* <CiInstagram className="react-icon" /> */}
              <AiFillInstagram className="react-icon" />
            </a>
          </li>

          <li className={`${footer.tiktok ? "" : "hidden"}`}>
            <a
              href={footer.tiktok}
              target="_blank"
              className={`social-link ${footer.tiktok ? "" : "hidden"}`}
              rel="noreferrer"
            >
              <FaTiktok className="react-icon" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
