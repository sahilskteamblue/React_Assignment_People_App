import React from "react";
import { GithubOutlined } from "@ant-design/icons";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <span className="footer-text">Made with 💖 by </span>
        <a
          href="https://github.com/sahilskteamblue/React_Assignment_People_App"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sahil Kavitake <GithubOutlined />
        </a>
      </div>
    </>
  );
};

export default Footer;
