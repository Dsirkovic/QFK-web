import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/banner.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>Quasi Fancy Kitchen</h1>
        <p>Bringing fancy to your home</p>
        <Link to="/menu">
          <button> Our Recipes</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
