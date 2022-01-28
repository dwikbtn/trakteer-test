import React, { useState } from "react";
import PropTypes from "prop-types";
import addFollow from "../../../assets/icons/person_add.svg";
import checkMark from "../../../assets/icons/check.svg";
// dont forget state and props check
const FollowBtn = ({ status }) => {
  const [followStatus, setStatus] = useState(status);

  const followBtn = (
    <div className="btn follow-btn" onClick={() => setStatus(!followStatus)}>
      <img src={addFollow} alt="add follow button" />
      <span className="follow_text">Follow</span>
    </div>
  );

  const unfollowBtn = (
    <div className="btn unfollow-btn" onClick={() => setStatus(!followStatus)}>
      <img src={checkMark} alt="unfollow button" />
      <span className="follow_text">Following</span>
    </div>
  );

  return followStatus ? followBtn : unfollowBtn;
};

FollowBtn.propTypes = {
  status: PropTypes.bool,
};

export default FollowBtn;
