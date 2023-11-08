import React from "react";
import {
  facebook,
  youtube,
  instagram,
  logo,
  linkedin,
} from "../public/index.js";

function Header() {
  return (
    <>
      <div id="header">
        <div id="logo">
          <img src={logo} width="100px" height="auto" className="sr-only" />
        </div>
        <div id="social-media">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            className="social-media-image"
          >
            <img src={facebook} alt="" width="50px" height="50px" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            className="social-media-image"
          >
            <img src={youtube} alt="" width="50px" height="50px" />
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            className="social-media-image"
          >
            <img src={instagram} alt="" width="50px" height="50px" />
          </a>
          <a
            href="https://linkedin.com/in/tomasz-widomski-4a3409191"
            target="_blank"
            className="social-media-image"
          >
            <img src={linkedin} alt="" width="50px" height="50px" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
