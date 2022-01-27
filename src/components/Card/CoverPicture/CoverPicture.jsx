import React from "react";
import optionIcon from "./../../../assets/icons/option.svg";

const CoverPicture = ({ url }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "90px",
        backgroundImage: `url(${url})`,
        backgroundSize: "cover",
      }}
    >
      <div className="option" onClick={() => alert("option clicked")}>
        <img src={optionIcon} alt="option" />
      </div>
    </div>
  );
};

export default CoverPicture;
