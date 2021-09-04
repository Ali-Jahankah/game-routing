import React, { Component } from "react";
import "../styles/contactus.css";
class Contactus extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="contactus-container">
          <div className="contactus-pic-div">
            <h1>Contact us</h1>
          </div>
          <div className="contactus-content-div">
            <h1 className="mobile-contact-h1">Contact us</h1>
            <div className="contactus-onlinechat-div">
              <h1>Online Chat</h1>

              <p>We are here to help you online!</p>
              <button type="button">Chat Now</button>
            </div>
            <div className="contactus-email-div">
              <h1>Email</h1>
              <p>
                We will respond you as soon as posible via Email! Our Email is:
              </p>
              <h2>asdasdasd@yahoo.com</h2>
            </div>
            <div className="contactus-phone-div">
              <h1>Telephone</h1>

              <p>
                You can call us from Monday-Friday between 9.00am-4.00pm via
                these lines:
              </p>
              <h2>021 234 56 789</h2>
              <h2>021 987 65 432</h2>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Contactus;
