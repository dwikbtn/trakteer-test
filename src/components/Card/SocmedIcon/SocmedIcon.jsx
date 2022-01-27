import React from "react";
import "../../../CardList.scss";

//import icon
import fb from "../../../assets/icons/socmed/facebook.svg";
import ig from "../../../assets/icons/socmed/instagram.svg";
import twt from "../../../assets/icons/socmed/twitter.svg";
import yt from "../../../assets/icons/socmed/youtube.svg";
import link from "../../../assets/icons/socmed/link.svg";

export const SocmedIcon = () => {
  return (
    <div className="socmed_list">
      <div
        className="socmed_icon"
        onClick={() => {
          alert("icon clicked");
        }}
      >
        <img className="ic" src={fb} alt="facebook" />
      </div>
      <div
        className="socmed_icon"
        onClick={() => {
          alert("icon clicked");
        }}
      >
        <img className="ic" src={twt} alt="twitter" />
      </div>
      <div
        className="socmed_icon"
        onClick={() => {
          alert("icon clicked");
        }}
      >
        <img className="ic" src={ig} alt="instagram" />
      </div>
      <div
        className="socmed_icon"
        onClick={() => {
          alert("icon clicked");
        }}
      >
        <img className="ic" src={yt} alt="youtube" />
      </div>
      <div
        className="socmed_icon"
        onClick={() => {
          alert("icon clicked");
        }}
      >
        <img className="ic" src={link} alt="website" />
      </div>
    </div>
  );
};

export default SocmedIcon;
