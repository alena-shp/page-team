import React from "react"
import "./PageTeam.scss"
import videoImg from "./assets/videoImg.jpg"

const PageTeam = () => {
  return (
    <div className="pageTeam">
      <div className="header">
        <div className="inner">
          <div className="header-menu">
            <a className="header-menu__link active" href="#0">HOME</a>
            <a className="header-menu__link" href="#0">PORTFOLIO</a>
            <a className="header-menu__link" href="#0">ABOUT US</a>
            <a className="header-menu__link" href="#0">CONTACT</a>
          </div>
          <div className="header-content">
            <div className="header-content__wrapper">
              <div className="header-content__greetings">
                <h1>Our strong organaisation</h1>
                <h3>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </h3>
                <a href="#0">Contact Us</a>
              </div>
              <div className="header-content__video">
                <img
                  src={videoImg}
                  alt=""
                  style={{ height: "100%", width: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="offer">
        <div className="offer-description">
          <h1 className="offer-description__title">
            Do you know we can provide for you ?
          </h1>
          <h3 className="offer-description__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </h3>
          <button className="offer-description__button">Learn More</button>
        </div>
        <div className="offer__functions">
          <div className="offer-function">
            <img className="offer-function__icon" src="" alt="" />
            <h1 className="offer-function__title" src="" alt="">
              Management
            </h1>
            <p className="offer-function__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>

          <div className="offer-function">
            <img className="offer-function__icon" src="" alt="" />
            <h1 className="offer-function__title" src="" alt="">
              Logo/Branding
            </h1>
            <p className="offer-function__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>

          <div className="offer-function">
            <img className="offer-function__icon" src="" alt="" />
            <h1 className="offer-function__title" src="" alt="">
              UI /UX Design
            </h1>
            <p className="offer-function__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>

          <div className="offer-function">
            <img className="offer-function__icon" src="" alt="" />
            <h1 className="offer-function__title" src="" alt="">
              Animation
            </h1>
            <p className="offer-function__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
        </div>
      </div>

      <div className="products">
        <h1 className="products__title">Feature products</h1>
        <h3 className="products__subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </h3>
        <div className="products__menu">
          <a href="#0">ALL</a>
          <a href="#0">Print template</a>
          <a href="#0">Web template</a>
          <a href="#0">User interface</a>
          <a href="#0">Mock-up</a>
        </div>
        <div className="products__img">
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>

      <div className="team">
        <h1 className="team__title">Meet our team</h1>
        <h3 className="team__subtitle">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </h3>
        <div className="team__people">
          <div className="team__person">
            <img src="" alt="" />
          </div>
          <div className="team-details">
            <h1 className="team-details__name">Meet our team</h1>
            <h3 className="team-details__about">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </h3>
            <div className="team-details__social">
              <a href="#0">Facebook</a>
              <a href="#0">Dribble</a>
              <a href="#0">Behance</a>
              <a href="#0">Twiter</a>
            </div>
            <div className="team-details__img">
              <div>
                <img className="team-details__img-photo" src="" alt="" />
                <span className="team-details__img-name">Sokina Jue</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="subscription">
        <h1 className="subscription__title">Meet our team</h1>
        <h3 className="subscription__subtitle">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </h3>
        <div className="subscription__form">
          <input className="subscription__form-input" />
          <button className="subscription__form-input">Subscribe</button>
        </div>
      </div>

      <div className="communication">
        <h1 className="communication__title">Get in touch</h1>
        <h3 className="communication__subtitle">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </h3>
        <div className="communication__form">
          <div className="communication__form-data">
            <input />
            <input />
          </div>
          <div className="communication__form-message">
            <input />
            <button>Send message</button>
          </div>
        </div>
        <div className="communication__contact">
          <h3 className="communication__contact-title">contact info</h3>
          <span className="communication__contact-address">
            Jalalabad 24 / A, Ambaarkhana, Sylhet, Bangladesh
          </span>
          <span className="communication__contact-email">
            redwan@deviserweb.com
          </span>
          <span className="communication__contact-phone">
            (+88) 017 617 46373
          </span>
        </div>
      </div>

      <div className="footer">
        <p className="footer__copyright">
          © Copyright @Junaed 2016, All rights reserved.
        </p>
        <div className="footer__social">
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
    </div>
  )
}

export default PageTeam
