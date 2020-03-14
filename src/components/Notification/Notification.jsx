import React from "react";
import T from "prop-types";

const Notification = ({ message }) => {
  return (
    <div>
      <h3>{message}</h3>
    </div>
  );
};

Notification.propTypes = {
  message: T.string.isRequired
};
export default Notification;
