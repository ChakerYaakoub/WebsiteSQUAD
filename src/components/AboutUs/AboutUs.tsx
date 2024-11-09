import React from "react";
import { AboutUsProps, useAboutUs } from "./useAboutUs";
import "./AboutUs.css";
import { NavItemsEnum } from "../../utils/navItems";

const AboutUs: React.FC<AboutUsProps> = (props) => {
  const { about } = useAboutUs(props);

  return (
    <>
      <section
        className="section "
        id={NavItemsEnum.AboutUs}
        aria-label="about"
      >
        <div className="container">
          <p className="section-subtitle">About us </p>

          <h2 className="h2 section-title"> Get to Know Us</h2>

          <div className="about-us" id="about-us">
            {/* <p> */}
            {about.trim().length > 0 ? (
              <div
                className="descriptionText"
                dangerouslySetInnerHTML={{ __html: about }}
              />
            ) : (
              "About us details will be added soon."
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
