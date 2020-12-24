import React, { Component } from "react";
import Home from "./components/home"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import JoinRoom from "./components/JoinRoom";
import CreateRoom from "./components/createRoom";
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/join-room" component={JoinRoom} exact/>
            <Route path="/create-room" component={CreateRoom} exact/>
          </Switch>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
