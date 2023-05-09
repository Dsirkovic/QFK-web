import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <button onClick={() => window.open("https://www.instagram.com/")}>
          <InstagramIcon />
        </button>
      </div>
      <p> &copy; 2022 Damir Sirkovic</p>
    </div>
  );
}

export default Footer;
