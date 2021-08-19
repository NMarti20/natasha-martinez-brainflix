import React from "react";
import HeaderScss from "./_header.scss";
import BrainflixLogo from "../../assets/images/logo/Logo-brainflix.svg";
import SearchIcon from "../../assets/images/icons/Icon-search.svg";
import UploadIcon from "../../assets/images/icons/Icon-upload.svg";
import ProfileImg from "../../assets/images/Mohan-muruge.jpg";

const Header = () => (
  <header className="header">
    <nav className="nav">
      {/* <a href="" className="nav__logo-link"> */}
      <img className="nav__logo" src={BrainflixLogo} alt="brainflix logo" />
      {/* </a> */}

      <div className="nav__container">
        <div className="nav__search">
          <input
            className="nav__search-icon"
            type="image"
            alt="search-icon"
            src={SearchIcon}
            name="search-icon"
          ></input>
          <input
            className="nav__search-bar"
            type="text"
            name="Search"
            placeholder="Search"
          ></input>
        </div>

        <div className="nav__upload">
          <button type="button" className="nav__btn">
            Upload
          </button>

          <input
            className="nav__upload-icon"
            type="image"
            alt="upload-icon"
            src={UploadIcon}
            name="upload-icon"
          ></input>
        </div>

        <img
          className="nav__profile-img"
          src={ProfileImg}
          alt="profile-img"
        ></img>
      </div>
    </nav>
  </header>
);

export default Header;
