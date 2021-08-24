import MainVideo from "../components/MainVideo/MainVideo";
import VideoDescription from "../components/VideoDescription/VideoDescription";
import videoDetails from "../data/video-details.json";
import SideVideos from "../data/videos.json";
import Comments from "../components/Comments/Comments";
import CommentsPosted from "../components/CommentsPosted/CommentsPosted";
import SubVideos from "../components/SubVideos/SubVideos";
import React from "react";
import { Component } from "react";

export default class Home extends Component {
  state = {
    mainVideo: videoDetails[0],
    videoDetails: videoDetails,
    videos: SideVideos,
  };

  handleSelectedVideo = (clickedId) => {
    const newFoundVideo = this.state.videoDetails.find(
      (video) => clickedId === video.id
    );
    this.setState({
      mainVideo: newFoundVideo,
    });
  };

  render() {
    const filteredVideos = this.state.videos.filter(
      (video) => video.id !== this.state.mainVideo.id
    );

    const commentsMap = this.state.mainVideo.comments.map((comment) => (
      <CommentsPosted key={comment.id} commentsData={comment}></CommentsPosted>
    ));

    return (
      <div className="App">
        <MainVideo mainVideo={this.state.mainVideo} />

        <section className="App__main-container">
          <div className="App__desc-comments">
            <VideoDescription videoDesc={this.state.mainVideo} />

            <Comments />

            {commentsMap}
          </div>

          <div className="App__subVideos">
            <SubVideos
              subVids={filteredVideos}
              selectedVideo={this.handleSelectedVideo}
            />
          </div>
        </section>
      </div>
    );
  }
}
