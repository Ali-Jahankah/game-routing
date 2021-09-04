import React, { Component } from "react";
import "../styles/slideshow.css";
import Video from "../Images/gta.mp4";
import tombrider from "../Images/4.jpeg";
import farcry from "../Images/farcry.mp4";

class SlideShow extends Component {
  state = {
    slideIndex: 1,
    src: "./Images/gta.mp4",
  };
  componentDidMount() {
    var slideIndex = this.state.slideIndex;
    this.sliding(slideIndex);
  }
  videoShow() {
    return <></>;
  }
  sliding = (x) => {
    var slideIndex = this.state.slideIndex;
    var i;
    var slides = document.getElementsByClassName("slide");
    if (x === 2) {
      for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("slide-hide");
        slides[i].classList.add("slide-hide-left");
      }
      slides[slideIndex - 1].classList.remove("slide-hide-left");
    }
    if (x === 1) {
      for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("slide-hide-left");
        slides[i].classList.add("slide-hide");
      }

      slides[slideIndex - 1].classList.remove("slide-hide");
    }
  };

  goRight = (e) => {
    let x = 1;
    let n;
    if (this.state.slideIndex === 4) {
      this.state.slideIndex = 1;
      n = 1;
    } else {
      n = this.state.slideIndex += 1;
    }
    this.sliding(x);
  };
  goLeft = (e) => {
    let n;
    let x = 2;
    if (this.state.slideIndex === 1) {
      this.state.slideIndex = 4;
      n = 4;
    } else {
      n = this.state.slideIndex -= 1;
    }

    this.sliding(x);
  };
  render() {
    return (
      <>
        <div id="slideContainer">
          <div className="slide slide-1">
            <div className="slide-1-video-div">
              <video className="slide-video" id="video" autoPlay muted loop>
                <source src={Video} type="video/mp4" />
                <source src={Video} type="video/ogg" />
              </video>
            </div>
            <div className="slide-1-content">
              <h1 className="slide-1-h1">% GTA V On Sale % </h1>
              <br />
              <button
                className="slide-1-button"
                onClick={() => {
                  this.props.history.push("/Shop");
                }}
              >
                Buy!
              </button>
            </div>
          </div>
          <div className="slide slide-2">
            <div className="slide-2-content">
              <img src="/img/reviews.jpg" className="slide-2-img"></img>
              <div className="slide-2-div">
                <h3>
                  Read people's reviews about us and give us your feedback!
                </h3>
                <button
                  className="slide-2-button"
                  onClick={() => {
                    this.props.history.push("/Reviews");
                  }}
                >
                  Go To Reviews
                </button>
              </div>
            </div>
          </div>
          <div className="slide slide-3">
            <div className="slide-3-video-div">
              <video className="slide-video" id="video" autoPlay muted loop>
                <source src={farcry} type="video/mp4" />
                <source src={farcry} type="video/ogg" />
              </video>
            </div>
            <div className="slide-3-content">
              <h1>Find out about latest games!</h1>
              <button
                className="slide-3-button"
                onClick={() => {
                  this.props.history.push("/Shop");
                }}
              >
                Let's Go!
              </button>
            </div>
          </div>
          <div className="slide slide-4">
            <div className="slide-4-content">
              <img src={tombrider} className="slide-4-img"></img>
              <div className="slide-3-div">
                <h1>Tomb Raider 4 just released!</h1>

                <button
                  className="slide-4-button"
                  onClick={() => {
                    this.props.history.push("/Shop");
                  }}
                >
                  Find out
                </button>
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={this.goLeft}
            className="slide-button slide-pre"
          >
            {" "}
            &lt;{" "}
          </button>
          <button
            type="button"
            onClick={this.goRight}
            className="slide-button slide-next"
          >
            {" "}
            &gt;{" "}
          </button>
        </div>
      </>
    );
  }
}

export default SlideShow;
