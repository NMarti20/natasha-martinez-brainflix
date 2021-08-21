import "./_videoDescription.scss";
import ViewsIcon from "../../assets/images/icons/Icon-views.svg";
import LikesIcon from "../../assets/images/icons/Icon-likes.svg";

import React from "react";

export default function VideoDescription({ videoDesc }) {
  return (
    <section className="video">
      <div className="video__details">
        <h1 className="video__title"> {videoDesc.title} </h1>

        <div className="video__small-details-container">
          <div className="video__channel-date">
            <p className="video__channel">By {videoDesc.channel}</p>
            <p className="video__date">{formattedDate(videoDesc.timestamp)}</p>
          </div>

          <div className="video__views-likes">
            <img
              className="video__views-icon"
              src={ViewsIcon}
              alt="likes icon"
            ></img>
            <p className="video__views">{videoDesc.views}</p>
            <img
              className="video__views-icon"
              src={LikesIcon}
              alt="likes icon"
            ></img>
            <p className="video__likes">{videoDesc.likes}</p>
          </div>
        </div>
      </div>

      <div className="video__description">{videoDesc.description}</div>
    </section>
  );
}

// convert to date

function formattedDate(timeDate) {
  const dateObj = new Date(timeDate);

  const month = dateObj.getMonth() + 1;
  const date = dateObj.getDate();
  const year = dateObj.getFullYear();

  return +month + "/" + date + "/" + year;
}
