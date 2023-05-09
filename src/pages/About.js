import React from "react";
import AboutBanner from "../assets/bannerTofu.jpg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${AboutBanner})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About Us</h1>
        <p>Salut!<br></br><br></br>
          QFK are two young guys from Croatia, just trying to make sense of this crazy world we live in.<br></br><br></br>
          Just kidding it's. not really that philosophical. here's the deal: We really like cooking. We like it so much that it's starting to turn into an unhealthy, toxic love affair. But this whole deal spawns a lot of very tasty recipes and we decided to let the world in on our little corner of the vast, food obsessed universe.<br></br><br></br>On our page you'll find the many recipes we've made and catalogued over our time cooking for family and friends. The inspiration for these we found everywhere. OK, we can admit most of it is from reputable cooking scholars, at least we're sure. But some of it was devised exclusively by yours truly, mixing and matching the many flavors of the world, as many as we could find.<br></br><br></br>
          Our primary influence is always our Dalmatian cuisine, from the Dalmatia region of coastal Croatia. If you're from a different part of the world (and let's face it, you probably are, i mean this is written in english for a reason), then you'll surely find a lot of interesting stuff here.<br></br><br></br>
          So if you're looking for something different, if you're bored of the same weeknight dinner routine all week, if you ran out of ideas what to make, or if you're plain old hungry, take a gander at what we've scrounged together!<br></br><br></br>
          Be sure to also check out our social media, so you can have us with you while on the move!
        
          </p>{" "}
      </div>
    </div>
  );
}

export default About;
