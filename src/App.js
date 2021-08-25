import "./styles/App.scss";
import Header from "./components/Header/Header";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Upload from "./pages/Upload";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/upload" component={Upload} />
        </Switch>
      </Router>
    );
  }
}
