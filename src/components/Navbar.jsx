import React, { useState, useRef, useEffect } from "react";
import "../App.css";
import tmdbIcon from "../assets/tmdb-icon.png";

const Navbar = ({ onSearchIconClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [plusBubbleOpen, setPlusBubbleOpen] = useState(false);
  const langBtnRef = useRef(null);
  const langMenuRef = useRef(null);
  const plusBtnRef = useRef(null);
  const plusBubbleRef = useRef(null);

  // Dışarı tıklanınca dil menüsünü kapat
  useEffect(() => {
    const handleClick = (e) => {
      if (
        langBtnRef.current &&
        langMenuRef.current &&
        !langBtnRef.current.contains(e.target) &&
        !langMenuRef.current.contains(e.target)
      ) {
        setLangMenuOpen(false);
      }
      if (
        plusBtnRef.current &&
        plusBubbleRef.current &&
        !plusBtnRef.current.contains(e.target) &&
        !plusBubbleRef.current.contains(e.target)
      ) {
        setPlusBubbleOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header className="header">
      <nav className="nav container">
        <div className="nav__data">
          <a href="#" className="nav__logo">
            <img src={tmdbIcon} alt="TMDB" className="tmdb-logo" />
          </a>
          <ul className="nav__list nav__list--main">
            {/* Filmler Dropdown */}
            <li className="dropdown__item">
              <div className="nav__link">Movies</div>
              <ul className="dropdown__menu">
                <li><a href="#" className="dropdown__link">Popular</a></li>
                <li><a href="#" className="dropdown__link">Now Playing</a></li>
                <li><a href="#" className="dropdown__link">Upcoming</a></li>
                <li><a href="#" className="dropdown__link">Top Rated</a></li>
              </ul>
            </li>
            {/* Diziler Dropdown */}
            <li className="dropdown__item">
              <div className="nav__link">TV Shows</div>
              <ul className="dropdown__menu">
                <li><a href="#" className="dropdown__link">Popular</a></li>
                <li><a href="#" className="dropdown__link">Airing Today</a></li>
                <li><a href="#" className="dropdown__link">On TV</a></li>
                <li><a href="#" className="dropdown__link">Top Rated</a></li>
              </ul>
            </li>
            {/* Kişiler Dropdown */}
            <li className="dropdown__item">
              <div className="nav__link">People</div>
              <ul className="dropdown__menu">
                <li><a href="#" className="dropdown__link">Popular People</a></li>
              </ul>
            </li>
            {/* Daha Fazla Dropdown */}
            <li className="dropdown__item">
              <div className="nav__link">More</div>
              <ul className="dropdown__menu">
                <li><a href="#" className="dropdown__link">Discussions</a></li>
                <li><a href="#" className="dropdown__link">Featured</a></li>
                <li><a href="#" className="dropdown__link">Support</a></li>
                <li><a href="#" className="dropdown__link">API Docs</a></li>
                <li><a href="#" className="dropdown__link">API for Business</a></li>
              </ul>
            </li>
          </ul>
          <ul className="nav__list nav__list--right">
            <li className="nav__spacer"></li>
            <li className="nav__plus-wrapper">
              <a
                href="#"
                className="nav__link nav__plus"
                id="plus-btn"
                ref={plusBtnRef}
                onClick={e => {
                  e.preventDefault();
                  setPlusBubbleOpen(v => !v);
                }}
              >
                +
              </a>
              <div
                className={`plus-bubble${plusBubbleOpen ? " active" : ""}`}
                id="plus-bubble"
                ref={plusBubbleRef}
              >
                Can't find a movie or TV show? <br />Sign in to add it.
              </div>
            </li>
            <li className="nav__item language-dropdown">
              <button
                className="nav__link language-btn"
                onClick={e => {
                  e.preventDefault();
                  setLangMenuOpen(v => !v);
                }}
                ref={langBtnRef}
              >
                EN
              </button>
              <div
                className="language-menu"
                style={{ display: langMenuOpen ? "block" : "none" }}
                ref={langMenuRef}
              >
                <h3>Language Settings</h3>
                <div className="lang-section">
                  <div className="lang-section-label-row">
                    <label htmlFor="default-lang">Default Language</label>
                    <a href="#" className="reset-btn">Reset</a>
                  </div>
                  <select id="default-lang">
                    <option defaultValue>Turkish (tr-TR)</option>
                    <option>English (en-US)</option>
                  </select>
                </div>
                <div className="lang-section">
                  <label htmlFor="secondary-lang">Secondary Language</label>
                  <select id="secondary-lang">
                    <option defaultValue>English (en-US)</option>
                    <option>Turkish (tr-TR)</option>
                  </select>
                </div>
              </div>
            </li>
            <li><a href="#" className="nav__link login-btn">Login</a></li>
            <li><a href="#" className="nav__link signup-btn">Join TMDB</a></li>
            <li>
              <a
                href="#"
                className="nav__link nav__search"
                onClick={e => {
                  e.preventDefault();
                  if (onSearchIconClick) onSearchIconClick();
                }}
              >
                <i className="ri-search-line"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar; 