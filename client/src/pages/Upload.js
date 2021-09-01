import React from "react";
import UploadVidImg from "../assets/images/Upload-video-preview.jpg";
import "./_upload.scss";
import { Link } from "react-router-dom";

export default function Upload() {
  return (
    <>
      <section className="upload">
        <div className="upload__title-cont">
          <h1 className="upload__title">Upload Video</h1>
        </div>
        <div className="upload__body-cont">
          <div className="upload__video-thumbnail">
            <p className="upload__header">VIDEO THUMBNAIL</p>
            <img className="upload__video" src={UploadVidImg} alt=""></img>
          </div>
          <form className="upload__form">
            <div className="upload__title-cont">
              <label className="upload__title-label">TITLE YOUR VIDEO</label>
              <input
                className="upload__title-input"
                placeholder="Add a title to your video"
              ></input>
            </div>
            <div className="upload__dec-cont">
              <label className="upload__desc-label">
                ADD A VIDEO DESCRIPTION
              </label>
              <textarea
                className="upload__desc"
                placeholder="Add a description of your video"
              ></textarea>
            </div>
          </form>
        </div>

        <div className="upload__btns">
          <Link to="/">
            {" "}
            <button
              onClick={() => {
                alert("You are uploading a video");
              }}
              type="button"
              className="upload__publish-btn"
            >
              PUBLISH
            </button>
          </Link>
          <button type="button" className="upload__cancel-btn">
            CANCEL
          </button>
        </div>
      </section>
    </>
  );
}
