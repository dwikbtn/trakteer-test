import React from "react";
import PropTypes from "prop-types";

import CoverPicture from "./CoverPicture/CoverPicture";
import SocmedIcon from "./SocmedIcon/SocmedIcon";
import Avatar from "./CardHeader/Avatar";
import FollowBtn from "./CardHeader/FollowBtn";
import Handler from "./CardBody/Handler";
import Bio from "./CardBody/Bio";
import FollowerCount from "./CardBody/FollowerCount";
import Category from "./CardBody/Category";

import "./card.scss";

const Card = ({ user }) => {
  return (
    <div className="card">
      <CoverPicture url={user.cover_img} />
      <div className="card-header">
        <Avatar url={user.avatar_img} />
        <FollowBtn status={user.followed_status} />
      </div>
      <div className="card-body">
        <Handler name={user.name} username={user.username} />
        <Bio bio={user.bio} />
        <div className="follower_category">
          <FollowerCount count={user.follower_count} />
          <Category category={user.category} />
        </div>
      </div>
      <div className="card-footer">
        <SocmedIcon />
      </div>
    </div>
  );
};

Card.propTypes = {
  user: PropTypes.object,
};

export default Card;
