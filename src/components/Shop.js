import React, { Component } from "react";
import "../styles/shop.css";
import SubsetDiv from "./ShopSubsetDiv";
import { NavLink } from "react-router-dom";
import Comment from "./Comment";

class Shop extends Component {
  render() {
    const filter = this.props.match.params?.id;

    return (
      <>
        <div className="main">
          <nav id="navShop">
            <ul>
              <NavLink
                activeClassName="navshop-active-link"
                className="navshop-link"
                to="/Shop/All"
              >
                <li>All</li>
              </NavLink>

              <NavLink
                activeClassName="navshop-active-link"
                to="/Shop/Latest"
                className="navshop-link"
              >
                <li>Latest</li>
              </NavLink>

              <NavLink
                activeClassName="navshop-active-link"
                to="/Shop/Offer"
                className="navshop-link"
              >
                <li>Offers</li>
              </NavLink>

              <NavLink
                activeClassName="navshop-active-link"
                to="/Shop/Popular"
                className="navshop-link"
              >
                <li>Popular</li>
              </NavLink>

              <NavLink
                activeClassName="navshop-active-link"
                to="/Shop/Free"
                className="navshop-link"
              >
                <li>Free</li>
              </NavLink>
            </ul>
          </nav>
          <div className="shop-container">
            <div className="main-shop-div">
              <SubsetDiv type={filter}></SubsetDiv>
            </div>
          </div>
        </div>
        <br></br>
        <Comment></Comment>
      </>
    );
  }
}

export default Shop;
