import MainVideo from "../components/MainVideo/MainVideo";
import VideoDescription from "../components/VideoDescription/VideoDescription";
import Comments from "../components/Comments/Comments";
import CommentsPosted from "../components/CommentsPosted/CommentsPosted";
import SubVideos from "../components/SubVideos/SubVideos";
import React from "react";
import { Component } from "react";
import { baseURL, APIkey } from "../Utils/utils";
import axios from "axios";

export default class Home extends React.Component {
  state = {
    videoDetails: null,
    videos: [],
  };

  getVideo = (id) => {
    axios.get(`${baseURL}/videos/${id}`).then((response) => {
      this.setState({
        videoDetails: response.data,
      });
    }).catch((err) => {
      console.log(err);
    });;
  };

  componentDidMount() {
    axios.get(`${baseURL}/videos`).then((response) => {
      this.setState({
        videos: response.data,
      });

      this.getVideo(response.data[0].id);
    }).catch((err) => {
      console.log(err);
    });;
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.getVideo(this.props.match.params.id);
    }
  }

  render() {
    if (!this.state.videoDetails) {
      return <p>Loading video . . . </p>;
    }

    const filteredVideos = this.state.videos.filter(
      (video) => video.id !== this.state.videoDetails.id
    );

    const commentsMap = this.state.videoDetails.comments.map((comment) => (
      <CommentsPosted key={comment.id} commentsData={comment}></CommentsPosted>
    ));

    return (
      <div className="App">
        <MainVideo mainVideo={this.state.videoDetails} />

        <section className="App__main-container">
          <div className="App__desc-comments">
            <VideoDescription videoDesc={this.state.videoDetails} />

            <Comments />

            {commentsMap}
          </div>

          <div className="App__subVideos">
            <SubVideos
              subVids={filteredVideos}
              selectedVideo={this.videoDetails}
            />
          </div>
        </section>
      </div>
    );
  }
}
