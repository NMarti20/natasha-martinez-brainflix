import React from "react";
import "./_header.scss";
import BrainflixLogo from "../../assets/images/logo/Logo-brainflix.svg";
import ProfileImg from "../../assets/images/Mohan-muruge.jpg";
import { Link } from "react-router-dom";
import Upload from "../../pages/Upload";

const Header = () => (
  <header className="header">
    <nav className="nav">
      <Link to="/" className="nav__logo-link">
        <img className="nav__logo" src={BrainflixLogo} alt="brainflix logo" />
      </Link>
      <div className="nav__container">
        <input
          className="nav__search-bar"
          type="text"
          name="Search"
          placeholder="Search"
        ></input>

        <div className="nav__upload-and-img-container">
          <Link to="/upload">
            <div className="nav__upload">
              <button type="button" className="nav__btn">
                <img className="nav__upload-fake" src={Upload} alt=""></img>
                UPLOAD
              </button>
            </div>
          </Link>

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
