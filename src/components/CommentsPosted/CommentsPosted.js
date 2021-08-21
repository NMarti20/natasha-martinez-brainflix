import React from "react";
import "./_commentsPosted.scss";

export default function CommentsPosted({ commentsData }) {
  return (
    <section className="commentsPosted">
      <div className="commentsPosted__pic-container">
        <img className="commentsPosted__user-img"></img>
      </div>

      <div className="commentsPosted__container">
        <div className="commentsPosted__name-date-container">
          <p className="user-name">{commentsData.name}</p>
          <p className="date-posted">{formattedDate(commentsData.timestamp)}</p>
        </div>
        <p className="user-comment">{commentsData.comment}</p>
      </div>

      {/* <hr></hr> */}
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
