import React, { useState } from "react";
import addFollow from "../../../assets/icons/person_add.svg";
// dont forget state and props check
const FollowBtn = ({ status }) => {
  const [followStatus, setStatus] = useState(status);
  return (
    <div className="follow-btn">
      <img src={addFollow} alt="add follow button" />
      <span className="follow_text">Follow</span>
    </div>
  );
};

export default FollowBtn;
