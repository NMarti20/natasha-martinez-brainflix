import React from "react";
import "./_mainVideo.scss";

// import { v4 as uuid } from "uuid";

export default function MainVideo(props) {
  return (
    <section className="main">
      <video
        className="main__video"
        poster={props.mainVideo.image}
        controls
      ></video>
    </section>
  );
}
