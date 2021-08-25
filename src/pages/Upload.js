import React from "react";

export default function Upload() {
  return (
    <div>
      <h1>Upload Video</h1>

      <section className="upload">
        <div className="upload__video-thumbnail">
          <p className="upload__header">VIDEO THUMBNAIL</p>
          <img className="upload__video" alt=""></img>
        </div>
        <form className="upload__title-desc">
          <label className="upload__title-label">TITLE YOUR VIDEO</label>
          <input
            className="upload__title-input"
            placeholder="Add a title to your video"
          ></input>
          <label className="upload__desc-label">ADD A VIDEO DESCRIPTION</label>
          <textarea
            className="upload__desc"
            placeholder="Add a description of your video"
          ></textarea>
        </form>
      </section>
    </div>
  );
}
