import React from "react";
import "./_comments.scss";
import userPhoto from "../../assets/images/Mohan-muruge.jpg";

function Comments(props) {
  return (
    <section className="comments">
      <h2 className="comments__title">3 Comments</h2>
      <div className="comments__insert">
        <img
          className="comments__img"
          src={userPhoto}
          alt="mohan-muruge pic"
        ></img>

        <div className="comments__info">
          <form className="comments__form">
            <div className="comments__label-comment">
              <label className="comments__label">JOIN THE CONVERSATION</label>
              <textarea
                type="text"
                className="comments__comment-insert"
                id="comments__comment-insert"
                name="comment"
                placeholder="Write comment here"
              ></textarea>
            </div>

            <button type="submit" className="comments__btn">
              COMMENT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Comments;
