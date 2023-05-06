import React from "react";
import number from "./number.jpg";
import { Link } from "react-router-dom";
import insta from "./instagram.png";
import face from "./facebook.png";
import twit from "./twitter.png";
import tgram from "./telegram.png";

const Footer = () => {
  return (
    <footer>
      <p className="fot-p">Thanks for visiting</p>
      <h1>Online Math</h1>
      <div className="footer-content">
        <div className="f-content-left">
          <h3>onlinemath.com</h3>
        </div>
        <div className="f-content-center">
          <Link to={"/signin"}>
            <div className="btn">Sign up</div>
          </Link>
        </div>
        <div className="f-content-right">
          <span>24/7</span>
          <p>+998989898989</p>
        </div>
      </div>

      <div className="footer-line"></div>

      <div className="footer-bottom">
        <div className="circle">
          <img src={insta} alt="" />
        </div>
        <div className="circle">
          <img src={twit} alt="" />
        </div>
        <div className="circle">
          <img src={face} alt="" />
        </div>
        <div className="circle">
          <img src={tgram} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
