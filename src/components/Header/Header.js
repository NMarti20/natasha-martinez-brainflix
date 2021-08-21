import React from "react";
import HeaderScss from "./_header.scss";
import BrainflixLogo from "../../assets/images/logo/Logo-brainflix.svg";
import ProfileImg from "../../assets/images/Mohan-muruge.jpg";

const Header = () => (
  <header className="header">
    <nav className="nav">
      <img className="nav__logo" src={BrainflixLogo} alt="brainflix logo" />

      <div className="nav__container">
        <input
          className="nav__search-bar"
          type="text"
          name="Search"
          placeholder="Search"
        ></input>

        <div className="nav__upload-and-img-container">
          <div className="nav__upload">
            <button type="button" className="nav__btn">
              UPLOAD
            </button>
          </div>

          <img
            className="nav__profile-img"
            src={ProfileImg}
            alt="profile-img"
          ></img>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
