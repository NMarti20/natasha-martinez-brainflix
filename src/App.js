import "./styles/App.scss";
import Header from "./components/Header/Header";
import MainVideo from "./components/MainVideo/MainVideo";
import VideoDescription from "./components/VideoDescription/VideoDescription";
import videoDetails from "./data/video-details.json";
import asideVideos from "./data/videos.json";
import Comments from "./components/Comments/Comments";
import CommentsPosted from "./components/CommentsPosted/CommentsPosted";
import React from "react";

class App extends React.Component {
  state = {
    mainVideo: videoDetails[0],
    videoDetails: videoDetails,
    videos: asideVideos,
  };

  render() {
    const commentsMap = this.state.mainVideo.comments.map((comment) => (
      <CommentsPosted commentsData={comment}> </CommentsPosted>
    ));

    return (
      <div className="App">
        <Header />
        <MainVideo mainVideo={this.state.mainVideo} />
        <VideoDescription videoDesc={this.state.mainVideo} />
        <Comments />
        {commentsMap}
      </div>
    );
  }
}

export default App;
