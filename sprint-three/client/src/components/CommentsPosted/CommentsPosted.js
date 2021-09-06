import React from "react";
import "./_commentsPosted.scss";
import { formattedDate } from '../../Utils/utils';

export default function CommentsPosted({ commentsData }) {
  return (
    <section className="commentsPosted">
      <div className="commentsPosted__pic-container">
        <img className="commentsPosted__user-img" alt=""></img>
      </div>

      <div className="commentsPosted__container">
        <div className="commentsPosted__name-date-container">
          <p className="commentsPosted__user-name">{commentsData.name}</p>
          <p className="commentsPosted__date-posted">
            {formattedDate(commentsData.timestamp)}
          </p>
        </div>
        <p className="commentsPosted__user-comment">{commentsData.comment}</p>
      </div>
    </section>
  );
}


