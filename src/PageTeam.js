import React from "react"
import "./PageTeam.scss"
import videoImg from "./assets/videoImg.jpg"
import settingsImg from "./assets/settingsImg.png"
import diamondImg from "./assets/diamondImg.png"
import pencilImg from "./assets/pencilImg.png"
import personImg from "./assets/personImg.png"
import truckImg from "./assets/truckImg.png"
import inImg from "./assets/inImg.png"
import facebookImg from "./assets/facebookImg.png"
import twitterImg from "./assets/twitterImg.png"
import googleImg from "./assets/googleImg.png"

const PageTeam = () => {
  return (
    <div className="pageTeam">
      <div className="header">
        <div className="inner">
          <div className="header-menu">
            <a className="header-menu__link active" href="#0">
              HOME
            </a>
            <a className="header-menu__link" href="#0">
              PORTFOLIO
            </a>
            <a className="header-menu__link" href="#0">
              ABOUT US
            </a>
            <a className="header-menu__link" href="#0">
              CONTACT
            </a>
          </div>
          <div className="header-content">
            <div className="header-content__wrapper">
              <div className="header-content__greetings">
                <h1>Our strong organaisation</h1>
                <h3>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </h3>
                <a className="btn-primary" href="#0">
                  Contact Us
                </a>
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
        <div className="inner">
          <div className="offer-description">
            <h1 className="offer-description__title">
              Do you know we can provide for you ?
            </h1>
            <h3 className="offer-description__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi
            </h3>
            <button className="btn-secondary">Learn More</button>
          </div>
          <div className="offer__functions">
            <div className="offer-function">
              <img className="offer-function__icon" src={settingsImg} alt="" />
              <h1 className="offer-function__title">Management</h1>
              <p className="offer-function__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>

            <div className="offer-function">
              <img className="offer-function__icon" src={pencilImg} alt="" />
              <h1 className="offer-function__title">Logo/Branding</h1>
              <p className="offer-function__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>

            <div className="offer-function">
              <img className="offer-function__icon" src={diamondImg} alt="" />
              <h1 className="offer-function__title">UI /UX Design</h1>
              <p className="offer-function__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>

            <div className="offer-function">
              <img className="offer-function__icon" src={truckImg} alt="" />
              <h1 className="offer-function__title">Animation</h1>
              <p className="offer-function__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="products">
        <div className="inner">
          <h1 className="products__title">Feature products</h1>
          <h3 className="products__subtitle">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur
            <hr />
          </h3>
          <ul className="products__menu">
            <li>
              <a className="active" href="#0">
                All
              </a>
            </li>
            <li>
              <a href="#0">Print template</a>
            </li>
            <li>
              <a href="#0">Web template</a>
            </li>
            <li>
              <a href="#0">User interface</a>
            </li>
            <li>
              <a href="#0">Mock-up</a>
            </li>
          </ul>
          <div className="products__img">
            <img src="https://picsum.photos/id/1/280/280" alt="" />
            <img src="https://picsum.photos/id/160/280/280" alt="" />
            <img src="https://picsum.photos/id/366/280/280" alt="" />
            <img src="https://picsum.photos/id/180/280/280" alt="" />
            <img src="https://picsum.photos/id/119/280/280" alt="" />
            <img src="https://picsum.photos/id/367/280/280" alt="" />
            <img src="https://picsum.photos/id/357/280/280" alt="" />
            <img src="https://picsum.photos/id/0/280/280" alt="" />
          </div>
        </div>
      </div>

      <div className="team">
        <div className="inner">
          <h1 className="team__title">Meet our team</h1>
          <h3 className="team__subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
            <hr />
          </h3>
          <div className="team__people">
            <div className="team__person">
              <img
                src={personImg}
                alt=""
                style={{ width: "360px", height: "460px" }}
              />
            </div>
            <div className="team-details">
              <h1 className="team-details__name">Mark waugh</h1>
              <p className="team-details__about">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="team-details__social">
                <a href="#0">Facebook</a>
                <a href="#0">Dribble</a>
                <a href="#0">Behance</a>
                <a href="#0">Twiter</a>
              </div>
              <div className="team-details__img">
                <div className="team-details__img-photo">
                  <img src="https://picsum.photos/id/11/180/200" alt="" />
                  <a href="0#" className="team-details__img-name">
                    Sokina Jue
                  </a>
                </div>
                <div className="team-details__img-photo">
                  <img
                    className="team-details__img-photo"
                    src="https://picsum.photos/id/12/180/200"
                    alt=""
                  />
                  <a href="0#" className="team-details__img-name">
                    Sokina Jue
                  </a>
                </div>
                <div className="team-details__img-photo">
                  <img
                    className="team-details__img-photo"
                    src="https://picsum.photos/id/13/180/200"
                    alt=""
                  />
                  <a href="0#" className="team-details__img-name">
                    Sokina Jue
                  </a>
                </div>
                <div className="team-details__img-photo">
                  <img
                    className="team-details__img-photo"
                    src="https://picsum.photos/id/14/180/200"
                    alt=""
                  />
                  <a href="0#" className="team-details__img-name">
                    Sokina Jue
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="subscription">
        <div className="inner">
          <h1 className="subscription__title">
            Design tips, tricks, and freebies. Delivered weekly
          </h1>
          <h3 className="subscription__subtitle">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur
          </h3>
          <div className="subscription__form">
            <input className="subscription__form-input" placeholder="Email" />
            <button className="btn-primary">Subscribe</button>
          </div>
        </div>
      </div>

      <div className="communication">
        <h1 className="communication__title">Get in touch</h1>
        <h3 className="communication__subtitle">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur
          <hr />
        </h3>
        <div className="communication__main">
          <div className="communication__form">
            <div className="communication__form-data">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email" />
            </div>
            <div className="communication__form-message">
              <textarea type="text" placeholder="Type your message" />
              <button className="btn-primary">Send Message</button>
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
      </div>

      <div className="footer">
        <div className="inner">
          <p className="footer__copyright">
            © Copyright @Junaed 2016, All rights reserved
          </p>
          <div className="footer__social">
            <img src={inImg} alt="" />
            <img src={twitterImg} alt="" />
            <img src={facebookImg} alt="" />
            <img src={googleImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageTeam
