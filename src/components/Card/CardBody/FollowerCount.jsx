import React from "react";
import { nFormatter } from "../../../utils/numberFormatter";

const FollowerCount = ({ count }) => {
  return (
    <div className="follower_count">
      <span className="number">{nFormatter(count)}</span> Followers
    </div>
  );
};

export default FollowerCount;
