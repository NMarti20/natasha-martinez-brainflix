import React from "react";
import UploadVidImg from "../assets/images/Upload-video-preview.jpg";
import "./_upload.scss";
import { Link } from "react-router-dom";
import { baseURL } from "../Utils/utils";
import axios from "axios";
import { createRef } from "react";

const formRef = createRef();

export default function Upload(props) {
  const handleSubmit = (event) => {

    event.preventDefault();

    const title = formRef.current.title.value;
    const description = formRef.current.description.value;

    //validate errors, doesn't post while empty and reset when inputted
    if (title === "") {
      formRef.current.title.classList.add("comments__validate");
      return false;
    } else {
      formRef.current.title.classList.remove("comments__validate");
    }

    if (description === "") {
      formRef.current.description.classList.add("comments__validate");
      return false;
    } else {
      formRef.current.description.classList.remove("comments__validate");
    }


    axios
      .post(`${baseURL}/videos`, {
        title: title,
        channel: "NBA daily",
        image: "http://localhost:8080/images/image3.jpeg",
        description: description,
        views: "15,000,000",
        likes: "1,000,000",
        duration: "10:00",
        video: "",
        timestamp: Date.now(),
        comments: [],
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    alert("Video uploaded");

    props.history.push("/");
  };

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
          <form className="upload__form" ref={formRef}>
            <div className="upload__title-cont">
              <label className="upload__title-label">TITLE YOUR VIDEO</label>
              <input
                name="title"
                type="text"
                className="upload__title-input"
                placeholder="Add a title to your video"
              ></input>
            </div>
            <div className="upload__dec-cont">
              <label className="upload__desc-label">
                ADD A VIDEO DESCRIPTION
              </label>
              <textarea

                name="description"
                type="text"
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
              onClick={handleSubmit}
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
