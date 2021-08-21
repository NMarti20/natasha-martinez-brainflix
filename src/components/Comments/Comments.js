import React from "react";
import "./_comments.scss";
import userPhoto from "../../assets/images/Mohan-muruge.jpg";

function Comments(props) {
  return (
    <section class="comments">
      <h2 className="comments__title">3 Comments</h2>
      <div class="comments__insert">
        <img
          className="comments__img"
          src={userPhoto}
          alt="mohan-muruge pic"
        ></img>

        <div class="comments__info">
          <form class="comments__form">
            <div className="comments__label-comment">
              <label class="comments__label">JOIN THE CONVERSATION</label>
              <textarea
                type="text"
                class="comments__comment-insert"
                id="comments__comment-insert"
                name="comment"
                placeholder="Write comment here"
              ></textarea>
            </div>

            <button type="submit" class="comments__btn">
              COMMENT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Comments;
