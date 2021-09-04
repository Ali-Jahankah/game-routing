import React, { Component } from "react";
import "../styles/Menu.css";
import { NavLink, Link } from "react-router-dom";

class Menu extends Component {
  state = {
    firstDiv: "menu-icon",
    secondDiv: "menu-icon",
    thirdDiv: "menu-icon",
    menu: "menu-hidden",
  };
  clickMenu = (e) => {
    e.preventDefault();
    if (this.state.menu === "menu-hidden")
      this.setState({
        firstDiv: "menu-icon menu-icon-1",
        secondDiv: "menu-icon menu-icon-2",
        thirdDiv: "menu-icon menu-icon-3",
        menu: "menu-visible",
      });
    if (this.state.menu === "menu-visible") {
      this.setState({
        firstDiv: "menu-icon",
        secondDiv: "menu-icon",
        thirdDiv: "menu-icon",
        menu: "menu-hidden",
      });
    }
  };
  closeMobileMenu = () => {
    const myMenu = document.getElementsByClassName("menu-visible")[0];
    myMenu.classList.add("menu-hidden");
  };
  render() {
    return (
      <>
        <div id="mobileNav">
          <div id="navImg">
            <img
              src="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/08/10-Best-Gaming-Team-Logos-and-How-to-Make-Your-Own-CurrentYear-image1-1.png"
              alt="pic"
            />
          </div>
          <div id="navInput">
            <input
              type="text"
              className="search-bar"
              placeholder="Search here..."
            />
            <button type="button" id="searchIcon">
              <svg className="svg-icon" viewBox="0 0 20 20">
                <path
                  fill="none"
                  d="M12.323,2.398c-0.741-0.312-1.523-0.472-2.319-0.472c-2.394,0-4.544,
                  1.423-5.476,3.625C3.907,7.013,3.896,8.629,4.49,10.102c0.528,1.304,1.494,
                  2.333,2.72,2.99L5.467,17.33c-0.113,0.273,0.018,0.59,0.292,0.703c0.068,
                  0.027,0.137,0.041,0.206,0.041c0.211,0,0.412-0.127,
                  0.498-0.334l1.74-4.23c0.583,0.186,1.18,0.309,
                  1.795,0.309c2.394,0,4.544-1.424,
                  5.478-3.629C16.755,7.173,15.342,
                  3.68,12.323,2.398z M14.488,
                  9.77c-0.769,1.807-2.529,2.975-4.49,
                  2.975c-0.651,0-1.291-0.131-1.897-0.387c-0.002-0.004-0.002-0.004-0.002-0.004c-0.003,
                  0-0.003,0-0.003,0s0,0,0,
                  0c-1.195-0.508-2.121-1.452-2.607-2.656c-0.489-1.205-0.477-2.53,
                  0.03-3.727c0.764-1.805,2.525-2.969,4.487-2.969c0.651,0,1.292,
                  0.129,1.898,0.386C14.374,4.438,15.533,7.3,14.488,9.77z"
                ></path>
              </svg>
            </button>
          </div>

          <div id="navIconsContainer">
            <div id="navIcons">
              <div className="nav-basket">
                <svg className="svg-icon" viewBox="0 0 20 20">
                  <path
                    fill="black"
                    d="M17.671,13.945l0.003,
                                    0.002l1.708-7.687l-0.008-0.002c0.008-0.033,
                            0.021-0.065,0.021-0.102c0-0.236-0.191-0.428-0.427-0.428H5.276L4.67,
                            3.472L4.665,3.473c-0.053-0.175-0.21-0.306-0.403-0.306H1.032c-0.236,
                            0-0.427,0.191-0.427,0.427c0,0.236,0.191,0.428,0.427,0.428h2.902l2.667,
                            9.945l0,0c0.037,0.119,0.125,0.217,0.239,0.268c-0.16,0.26-0.257,0.562-0.257
                            ,0.891c0,0.943,0.765,1.707,1.708,1.707S10,16.068
                            ,10,15.125c0-0.312-0.09-0.602-0.237-0.855h4.744c-0.146
                            ,0.254-0.237,0.543-0.237,0.855c0,0.943,0.766,1.707,1.708,
                            1.707c0.944,0,1.709-0.764,1.709-1.707c0-0.328-0.097-0.631-0.257-0.891C17.55,14.182
                            ,17.639,14.074,17.671,13.945 M15.934,6.583h2.502l-0.38
                            ,1.709h-2.312L15.934,6.583zM5.505,6.583h2.832l0.189
                            ,1.709H5.963L5.505,6.583z M6.65,10.854L6.192
                            ,9.146h2.429l0.19,1.708H6.65z M6.879,11.707h2.027l0.189
                            ,1.709H7.338L6.879,11.707z M8.292,15.979c-0.472
                            ,0-0.854-0.383-0.854-0.854c0-0.473,0.382-0.855
                            ,0.854-0.855s0.854,0.383,0.854,0.855C9.146,15.596,
                            8.763,15.979,8.292,15.979 M11.708,
                            13.416H9.955l-0.189-1.709h1.943V13.416z M11.708,
                            10.854H9.67L9.48,9.146h2.228V10.854z M11.708,
                            8.292H9.386l-0.19-1.709h2.512V8.292z M14.315,
                            13.416h-1.753v-1.709h1.942L14.315,13.416zM14.6
                            ,10.854h-2.037V9.146h2.227L14.6,10.854z M14.884
                            ,8.292h-2.321V6.583h2.512L14.884,8.292z M15.978,
                            15.979c-0.471,0-0.854-0.383-0.854-0.854c0-0.473
                            ,0.383-0.855,0.854-0.855c0.473,0,0.854,0.383,
                            0.854,0.855C16.832,15.596,16.45,15.979,15.978,
                            15.979 M16.917,13.416h-1.743l0.189-1.709h1.934L16.917
                            ,13.416z M15.458,10.854l0.19-1.708h2.218l-0.38,1.708H15.458z"
                  ></path>
                </svg>
              </div>
              <div className="nav-user">
                <svg className="svg-icon" viewBox="0 0 20 20">
                  <path
                    fill="none"
                    d="M14.023,12.154c1.514-1.192,2.488-3.038,2.488-5.114c0-3.597-2.914-6.512-6.512-6.512
								c-3.597,0-6.512,2.916-6.512,6.512c0,2.076,0.975,3.922,2.489,5.114c-2.714,1.385-4.625,4.117-4.836,7.318h1.186
								c0.229-2.998,2.177-5.512,4.86-6.566c0.853,0.41,1.804,0.646,2.813,0.646c1.01,0,1.961-0.236,2.812-0.646
								c2.684,1.055,4.633,3.568,4.859,6.566h1.188C18.648,16.271,16.736,13.539,14.023,12.154z M10,12.367
								c-2.943,0-5.328-2.385-5.328-5.327c0-2.943,2.385-5.328,5.328-5.328c2.943,0,5.328,2.385,5.328,5.328
								C15.328,9.982,12.943,12.367,10,12.367z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div onClick={this.clickMenu} className="menu-container">
          <div className={this.state.firstDiv}></div>
          <div className={this.state.secondDiv}></div>
          <div className={this.state.thirdDiv}></div>
        </div>
        <div className={this.state.menu}>
          <div id="menuItems">
            <ul>
              <li className="menu-item" onClick={this.clickMenu}>
                <NavLink to="/Home" activeClassName="navlink-active">
                  Home
                </NavLink>
              </li>
              <li className="menu-item" onClick={this.clickMenu}>
                <NavLink to="/Shop" activeClassName="navlink-active">
                  Shop
                </NavLink>
              </li>
              <li className="menu-item" onClick={this.clickMenu}>
                <NavLink to="/Register" activeClassName="navlink-active">
                  Register
                </NavLink>
              </li>
              <li className="menu-item" onClick={this.clickMenu}>
                <NavLink to="/Contactus" activeClassName="navlink-active">
                  Contact us
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="mobile-login-form">
            <ul className="log-in-ul">
              <li className="log-in-li">
                <input
                  type="email"
                  className="user-name"
                  placeholder="Email Address"
                />
              </li>
              <li className="log-in-li">
                <input
                  type="password"
                  className="password"
                  placeholder="Password"
                />
                <Link to="/forgetpassword">Forget Password?</Link>
              </li>
              <li className="log-in-li">
                <button type="button" className="log-in-button">
                  Login
                </button>
              </li>
            </ul>
          </div>
          <div className="nav-img-div">
            <img
              src="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/08/10-Best-Gaming-Team-Logos-and-How-to-Make-Your-Own-CurrentYear-image1-1.png"
              alt="pic"
              className="nav-img"
            />
          </div>
        </div>
        <div className="menu-svg-container">
          <div id="menuDesktop">
            <div id="menuItems">
              <ul>
                <li className="menu-item">
                  <NavLink
                    to="/Home"
                    activeClassName="navlink-active"
                    className="navlink-none-active"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="menu-item">
                  <NavLink
                    to="/Shop"
                    activeClassName="navlink-active"
                    className="navlink-none-active"
                  >
                    Shop
                  </NavLink>
                </li>
                <li className="menu-item">
                  <NavLink
                    to="/Register"
                    activeClassName="navlink-active"
                    className="navlink-none-active"
                  >
                    Register
                  </NavLink>
                </li>
                <li className="menu-item">
                  <NavLink
                    to="/Contactus"
                    activeClassName="navlink-active"
                    className="navlink-none-active"
                  >
                    Contact us
                  </NavLink>
                </li>
                <li className="menu-search">
                  <input
                    type="text"
                    id="searchBar"
                    placeholder="Search here..."
                  />
                  <button type="button" id="searchIcon">
                    <svg className="svg-icon-search" viewBox="0 0 20 20">
                      <path
                        fill="none"
                        d="M12.323,2.398c-0.741-0.312-1.523-0.472-2.319-0.472c-2.394,
                        0-4.544,1.423-5.476,3.625C3.907,7.013,3.896,8.629
                        ,4.49,10.102c0.528,1.304,1.494,2.333,2.72,2.99L5.467
                        ,17.33c-0.113,0.273,0.018,0.59,0.292,0.703c0.068,0.027
                        ,0.137,0.041,0.206,0.041c0.211,0,0.412-0.127,0.498-0.334l1.74-4.23c0.583,
                        0.186,1.18,0.309,1.795,0.309c2.394,0,4.544-1.424,5.478-3.629C16.755
                        ,7.173,15.342,3.68,12.323,2.398z M14.488,9.77c-0.769,1.807-2.529,
                        2.975-4.49,2.975c-0.651,
                        0-1.291-0.131-1.897-0.387c-0.002-0.004-0.002-0.004-0.002-0.004c-0.003,0-0.003
                        ,0-0.003,0s0,0,0,
                        0c-1.195-0.508-2.121-1.452-2.607-2.656c-0.489-1.205-0.477-2.53,0.03-3.727c0.764-1.805
                        ,2.525-2.969,4.487-2.969c0.651,0,1.292,
                        0.129,1.898,0.386C14.374,4.438,15.533,7.3,14.488,9.77z"
                      ></path>
                    </svg>
                  </button>
                </li>
                <li className=" menu-shop-basket">
                  <div id="navIcons">
                    <div className="nav-basket">
                      <svg className="svg-icon" viewBox="0 0 20 20">
                        <path
                          fill="black"
                          d="M17.671,13.945l0.003,
                                    0.002l1.708-7.687l-0.008-0.002c0.008-0.033,
                            0.021-0.065,0.021-0.102c0-0.236-0.191-0.428-0.427-0.428H5.276L4.67,
                            3.472L4.665,3.473c-0.053-0.175-0.21-0.306-0.403-0.306H1.032c-0.236,
                            0-0.427,0.191-0.427,0.427c0,0.236,0.191,0.428,0.427,0.428h2.902l2.667,
                            9.945l0,0c0.037,0.119,0.125,0.217,0.239,0.268c-0.16,0.26-0.257,0.562-0.257
                            ,0.891c0,0.943,0.765,1.707,1.708,1.707S10,16.068
                            ,10,15.125c0-0.312-0.09-0.602-0.237-0.855h4.744c-0.146
                            ,0.254-0.237,0.543-0.237,0.855c0,0.943,0.766,1.707,1.708,
                            1.707c0.944,0,1.709-0.764,1.709-1.707c0-0.328-0.097-0.631-0.257-0.891C17.55,14.182
                            ,17.639,14.074,17.671,13.945 M15.934,6.583h2.502l-0.38
                            ,1.709h-2.312L15.934,6.583zM5.505,6.583h2.832l0.189
                            ,1.709H5.963L5.505,6.583z M6.65,10.854L6.192
                            ,9.146h2.429l0.19,1.708H6.65z M6.879,11.707h2.027l0.189
                            ,1.709H7.338L6.879,11.707z M8.292,15.979c-0.472
                            ,0-0.854-0.383-0.854-0.854c0-0.473,0.382-0.855
                            ,0.854-0.855s0.854,0.383,0.854,0.855C9.146,15.596,
                            8.763,15.979,8.292,15.979 M11.708,
                            13.416H9.955l-0.189-1.709h1.943V13.416z M11.708,
                            10.854H9.67L9.48,9.146h2.228V10.854z M11.708,
                            8.292H9.386l-0.19-1.709h2.512V8.292z M14.315,
                            13.416h-1.753v-1.709h1.942L14.315,13.416zM14.6
                            ,10.854h-2.037V9.146h2.227L14.6,10.854z M14.884
                            ,8.292h-2.321V6.583h2.512L14.884,8.292z M15.978,
                            15.979c-0.471,0-0.854-0.383-0.854-0.854c0-0.473
                            ,0.383-0.855,0.854-0.855c0.473,0,0.854,0.383,
                            0.854,0.855C16.832,15.596,16.45,15.979,15.978,
                            15.979 M16.917,13.416h-1.743l0.189-1.709h1.934L16.917
                            ,13.416z M15.458,10.854l0.19-1.708h2.218l-0.38,1.708H15.458z"
                        ></path>
                      </svg>
                    </div>
                    <div className="nav-user">
                      <svg className="svg-icon" viewBox="0 0 20 20">
                        <path
                          fill="none"
                          d="M14.023,12.154c1.514-1.192,2.488-3.038,2.488-5.114c0-3.597-2.914-6.512-6.512-6.512
								c-3.597,0-6.512,2.916-6.512,6.512c0,2.076,0.975,3.922,2.489,5.114c-2.714,1.385-4.625,4.117-4.836,7.318h1.186
								c0.229-2.998,2.177-5.512,4.86-6.566c0.853,0.41,1.804,0.646,2.813,0.646c1.01,0,1.961-0.236,2.812-0.646
								c2.684,1.055,4.633,3.568,4.859,6.566h1.188C18.648,16.271,16.736,13.539,14.023,12.154z M10,12.367
								c-2.943,0-5.328-2.385-5.328-5.327c0-2.943,2.385-5.328,5.328-5.328c2.943,0,5.328,2.385,5.328,5.328
								C15.328,9.982,12.943,12.367,10,12.367z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="nav-img-div">
              <img
                src="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/08/10-Best-Gaming-Team-Logos-and-How-to-Make-Your-Own-CurrentYear-image1-1.png"
                alt="pic"
                className="nav-img"
              />
            </div>
            <div id="logInForm">
              <ul className="log-in-ul">
                <li className="log-in-li log-in-li-email">
                  <input
                    type="email"
                    className="user-name"
                    placeholder="Email Address"
                  />
                  <Link to="/forgetpassword">Forget Password?</Link>
                </li>
                <li className="log-in-li">
                  <input
                    type="password"
                    className="password"
                    placeholder="Password"
                  />
                </li>
                <li className="log-in-li">
                  <button type="button" className="log-in-button">
                    Login
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div id="svg">
            <svg
              id="wave"
              viewBox="0 0 1440 100"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                  <stop stopColor=" rgb(236, 64, 92)" offset="30%"></stop>
                  <stop stopColor="rgb(80, 57, 83)" offset="100%"></stop>
                </linearGradient>
              </defs>
              <path
                id="wavePath"
                fill="url(#sw-gradient-0)"
                d="M0,90L10,76.7C20,63,40,37,60,36.7C80,37,
                100,63,120,76.7C140,90,160,90,180,80C200,70,220,50,240,
                43.3C260,37,280,43,300,45C320,47,340,43,360,38.3C380,33
                ,400,27,420,23.3C440,20,460,20,480,21.7C500,23,520,27,
                540,30C560,33,580,37,600,40C620,43,640,47,660,55C680,63
                ,700,77,720,73.3C740,70,760,50,780,43.3C800,37,820,43,840
                ,38.3C860,33,880,17,900,11.7C920,7,940,13,960,28.3C980,43
                ,1000,67,1020,70C1040,73,1060,57,1080,46.7C1100,37,1120,33
                ,1140,28.3C1160,23,1180,17,1200,26.7C1220,37,1240,63,1260,
                76.7C1280,90,1300,90,1320,83.3C1340,77,1360,63,1380,50C1400
                ,37,1420,23,1430,16.7L1440,10L1440,100L1430,100C1420,100,1400
                ,100,1380,100C1360,100,1340,100,1320,100C1300,100,1280,100,1260
                ,100C1240,100,1220,100,1200,100C1180,100,1160,100,1140,100C1120,
                100,1100,100,1080,100C1060,100,1040,100,1020,100C1000,100,980,100
                ,960,100C940,100,920,100,900,100C880,100,860,100,840,100C820,100,800
                ,100,780,100C760,100,740,100,720,100C700,100,680,100,660,100C640,100
                ,620,100,600,100C580,100,560,100,540,100C520,100,500,100,480,100C460
                ,100,440,100,420,100C400,100,380,100,360,100C340,100,320,100,300,100C280
                ,100,260,100,240,100C220,100,200,100,180,100C160,100,140,100,120,100C100,
                100,80,100,60,100C40,100,20,100,10,100L0,100Z"
              ></path>
            </svg>
          </div>
        </div>
      </>
    );
  }
}

export default Menu;
