import React from "react";

const Handler = ({ name, userName }) => {
  return (
    <div className="handler">
      <div className="name">{name}</div>
      <div className="user_name">{userName}</div>
    </div>
  );
};

export default Handler;
