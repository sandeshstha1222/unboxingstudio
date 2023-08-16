import React from "react";
import "./footer.css";
import logo from "../../assets/logo2.png";

const footer = () => {
  return (
    <div className="Footer">
      <div className="content">
        <div className="details">
          <div>
            <img src={logo} className="logo" />
            <p>UNBOXING STUDIO</p>
          </div>
          <div>Email Us</div>
          <div>Follow Us</div>
          <div>Contact Us</div>
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
