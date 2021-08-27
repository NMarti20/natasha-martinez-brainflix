import "./styles/App.scss";
import Header from "./components/Header/Header";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
// import videoDetails from "./data/video-details.json";
// import SideVideos from "./data/videos.json";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/upload" component={Upload} />
        <Route path="/videos/:id" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
