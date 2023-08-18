import React from "react";
import "./footer.css";
import logo from "../../assets/logo2.png";
import {
  BsFacebook,
  BsInstagram,
  BsDiscord,
  BsMessenger,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const footer = () => {
  return (
    <div className="Footer">
      <div className="content">
        <div className="details">
          <div style={{ textAlign: "center" }}>
            <img src={logo} className="logo" alt="UNBOXING STUDIO" />
            <p>UNBOXING STUDIO</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <p>Email Us</p>
            <input placeholder="Email" />
            <button>Subscribe</button>
          </div>
          <div className="FollowUs" style={{ textAlign: "center" }}>
            <p>Follow Us</p>
            <p style={{ display: "flex", gap: "4px" }}>
              <Link to="" className="linkStyle">
                <BsFacebook className="icon" />
              </Link>
              <Link to="" className="linkStyle">
                <BsInstagram className="icon" />
              </Link>
              <Link to="" className="linkStyle">
                <BsDiscord className="icon" />
              </Link>
              <Link to="" className="linkStyle">
                <BsMessenger className="icon" />
              </Link>
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <p>Contact Us</p>
            <div style={{ lineHeight: "0.5em" }}>
              <p>+9779846752387</p>
              <p>Dhapakhel, Lalitpur</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="copyright">
          <p>@2023 UnboxingStudio. All right reserved.</p>
          <p>PRIVACY POLICY</p>
          <p>TERMS & CONDITIONS</p>
        </div>
      </div>
    </div>
  );
};

export default footer;
