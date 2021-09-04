import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Menu from "./Menu";
import "../styles/app.css";
import Contactus from "./Contactus";
import Shop from "./Shop";
import Register from "./Regester";
import SlideShow from "./SlideShow";
import Reviews from "./Comment";

class App extends Component {
  render() {
    return (
      <>
        <Menu clickMenu={this.clickMenu} myState={this.state}></Menu>
        <div className="clear"></div>

        <Switch>
          <Route path="/Home" exact component={SlideShow}></Route>
          <Route path={["/Shop", "/Shop/:id"]} exact component={Shop}></Route>
          <Route path="/Register" exact component={Register}></Route>
          <Route path="/Contactus" exact component={Contactus}></Route>
          <Route path="/" exact component={SlideShow}></Route>
          <Route path="/Reviews" exact component={Reviews}></Route>
        </Switch>

        <footer id="footer">Made by Ali Jahankah</footer>
      </>
    );
  }
}

export default App;
