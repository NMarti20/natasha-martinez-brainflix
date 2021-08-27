import React from "react";
import "./_subVideos.scss";
import { Link } from "react-router-dom";

// import { v4 as uuid } from "uuid";

export default function SubVideos({ subVids, selectedVideo }) {
  return (
    <section className="subVideos">
      <h2 className="subVideos__header">NEXT VIDEO</h2>

      <div className="subVideos__videos">
        {subVids.map((subVid) => {
          return (
            <Link
              to={`/videos/${subVid.id}`}
              className="subVideos__img-info-container"
              key={subVid.id}
            >
              <div className="subVideos__img-container">
                <img
                  className="subVideos__img"
                  src={subVid.image}
                  alt="video images"
                ></img>
              </div>

              <div className="subVideos__info-container">
                <p className="subVideos__info-title">{subVid.title}</p>
                <p className="subVideos__info-channel">{subVid.channel}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
