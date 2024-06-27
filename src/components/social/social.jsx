import React from "react";
import "./social.css";
import Github from "../images/github.png";
import Discord from "../images/discord.png";
import Facebook from "../images/facebook.png";
import Instagram from "../images/instagram.png";

const Social = () => {
  function instabtn() {
    window.open("https://www.instagram.com/arbaz_a4/?hl=en");
  }
  function facebtn() {
    window.open("https://www.facebook.com/profile.php?id=100043039515791");
  }
  function gitbtn() {
    window.open("https://github.com/ArbazWizard01");
  }

  return (
    <>
      <div className="social-container">
        <img
          src={Facebook}
          alt="Facebook"
          className="facebook"
          onClick={facebtn}
        />
        <img
          src={Instagram}
          alt="Instagram"
          className="instagram"
          onClick={instabtn}
        />
        <img src={Github} alt="Github" className="github" onClick={gitbtn} />
        <img src={Discord} alt="Discord" className="discord" />
      </div>
    </>
  );
};

export default Social;
