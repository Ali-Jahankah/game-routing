import React, { Component } from "react";
import "../styles/register.css";
class RegesterForm extends Component {
  state = {};
  formSubmit = (e) => {
    e.preventDefault();
    let name = document.getElementsByClassName("regester-lastname")[0].value;
    if (!name) {
      e.preventDefault();
      alert("Noooooooo");
      console.log(name);
      return;
    } else {
      alert("Registered successfully!");
    }
  };
  render() {
    return (
      <>
        <div id="regesterDiv">
          <form id="regesterForm" onSubmit={this.formSubmit}>
            <h1 id="regesterTitle">Let's Regester</h1>
            <ul>
              <li>
                <input
                  type="text"
                  className="regester-name"
                  placeholder="Name"
                />
              </li>
              <li>
                <input
                  type="text"
                  className="regester-lastname"
                  placeholder="Last name"
                />
              </li>
              <li>
                <input
                  type="email"
                  className="regester-email"
                  placeholder="Email Address"
                />
              </li>
              <li>
                <input
                  type="password"
                  className="regester-password"
                  placeholder="Password"
                />
              </li>
              <li>
                <button type="submit" className="regester-sub-button">
                  Regester!
                </button>
              </li>
            </ul>
          </form>
        </div>
      </>
    );
  }
}

export default RegesterForm;
