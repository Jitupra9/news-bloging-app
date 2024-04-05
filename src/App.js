import React, { Component } from "react";
import Nav from "./component/nav";
import News from "./component/news";

export class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <News />
      </div>
    );
  }
}

export default App;
