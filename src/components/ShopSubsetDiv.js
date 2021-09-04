import React, { Component } from "react";
import Shoplist from "../json/shop.json";
import "../styles/shop.css";
class SubsetDiv extends Component {
  state = {};
  render() {
    return (
      <>
        {Shoplist.map((item) => {
          if (
            item.type?.toLowerCase() === this.props.type?.toLowerCase() ||
            !this.props.type ||
            this.props.type?.toLowerCase() === "all"
          )
            return (
              <>
                <div className="subset-div" key={item.id}>
                  <div className="img-div">
                    <img src={item.src} alt="asd"></img>
                    <button type="button">
                      {item.type === "free" ? "Free" : "Buy"}
                    </button>
                  </div>
                  <div className="subset-overlay-div">
                    <br />
                    <h2>Name: {item.name}</h2>
                    <br />
                    <h2>Year: {item.year}</h2>
                    <br />
                    <h2
                      style={{
                        textDecoration: "line-through red",
                        color: "green",
                      }}
                    >
                      {item.lastprice !== ""
                        ? "Last Price: " + item.lastprice
                        : ""}
                    </h2>
                    <br />
                    <h2>Price: {item.price}</h2>
                  </div>
                </div>
              </>
            );
        })}
        ;
      </>
    );
  }
}

export default SubsetDiv;
