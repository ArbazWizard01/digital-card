import React from "react";
import Image from "../images/my-image.jpg";
import Mail from "../images/envelope.png";
import Linkedin from "../images/linkedin.png";
import "./info.css";

const Info = () => {
  function linkedinbtn() {
    window.open("https://www.linkedin.com/in/arbaz-ansari-b7ab1a251/");
  }
  return (
    <>
      <div className="info-container">
        <img src={Image} alt="my-image" className="my-image" />
        <div className="my-name">Arbaz Ansari</div>
        <div className="my-profession">React Developer</div>
        <div className="my-mail">ansariarbaj957@gmail.com</div>
        <div className="btn-cntnr">
          <button className="mail-btn">
            <img src={Mail} alt="Mail" className="mail-icon" />
            Email
          </button>
          <button className="linkedin-btn" onClick={linkedinbtn}>
            <img src={Linkedin} alt="Linkedin" className="linkedin-icon" />
            LinkedIn
          </button>
        </div>
      </div>
    </>
  );
};

export default Info;
