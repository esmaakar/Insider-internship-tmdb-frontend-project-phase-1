import Navbar from "./components/Navbar";
import "./App.css";
import React, { useRef } from "react";
import PopularMenu from "./components/PopularMenu";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

function App() {
  const searchInputRef = useRef(null);

  // Bu fonksiyon, Navbar'a prop olarak verilecek
  const focusSearchInput = () => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  return (
    <SimpleBar style={{ maxHeight: '100vh' }} autoHide={false} scrollbarMaxSize={60} scrollbarMinSize={60}>
      <Navbar onSearchIconClick={focusSearchInput} />
      {/* Arama kutusu tam navbarın altında, hiçbir margin yok */}
      <div className="search-bar-wrapper">
        <i
          className="ri-search-line search-bar-icon"
          onClick={() => {
            if (searchInputRef.current) searchInputRef.current.focus();
          }}
          style={{ cursor: "pointer" }}
        ></i>
        <input
          ref={searchInputRef}
          type="text"
          className="search-bar-input"
          placeholder="Search for a movie, TV show, person..."
        />
      </div>
      {/* Hero Section Başlangıcı */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome.</h1>
          <p>Millions of movies, TV shows and people to discover. Explore now.</p>
          <div className="hero-search-bar">
            <input type="text" placeholder="Search for a movie, TV show, person..." />
            <button>Search</button>
          </div>
        </div>
      </div>
      <PopularMenu />
      {/* Diğer içerikler aşağıda, margin yok */}
      <div style={{ textAlign: "center" }}>
        {/* Buraya kendi içeriklerinizi ekleyebilirsiniz */}
      </div>
    </SimpleBar>
  );
}

export default App;
