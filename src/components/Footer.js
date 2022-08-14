import React from "react";
import { GithubOutlined } from "@ant-design/icons";

const Footer = () => {
  const footerStyle = {
    color: "#ffffff",
    background: "#000000",
    textAlign: "center",
    fontSize: "20px",
    padding: "15px",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#fff",
    textShadow: "0 0 0.05em #fff, 0 0 0.2em #fe05e1, 0 0 0.3em #fe05e1",
  };

  return (
    <>
      <div className="footer" style={footerStyle}>
        Made with 💖 by{" "}
        <a
          href="https://github.com/sahilskteamblue/React_Assignment_People_App"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          Sahil Kavitake <GithubOutlined />
        </a>
      </div>
    </>
  );
};

export default Footer;
