import React from "react";

const Handler = ({ name, username }) => {
  return (
    <div className="handler">
      <div className="name">{name}</div>
      <div className="user_name">@{username}</div>
    </div>
  );
};

export default Handler;
