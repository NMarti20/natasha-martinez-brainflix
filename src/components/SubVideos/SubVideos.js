import React from "react";
import "./_subVideos.scss";

// import { v4 as uuid } from "uuid";

export default function SubVideos({ subVids }) {
  return (
    <section className="subVideos">
      <h2 className="subVideos__header">NEXT VIDEO</h2>

      <div className="subVideos__videos">
        {subVids.map((subVid) => {
          return (
            <div
              className="subVideos__img-info-container"
              key={subVid.id}
              onClick={() => {
                subVids.clickHandler(subVid.id);
              }}
            >
              <img
                className="subVideos__img"
                src={subVid.image}
                alt="video images"
              ></img>

              <div className="subVideos__info-container">
                <p className="subVideos__title">{subVid.title}</p>
                <p className="subVideos__channel">{subVid.channel}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
