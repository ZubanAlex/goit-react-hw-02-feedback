import React from "react";
import T from "prop-types";

const Section = ({ title, children }) => {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: T.string.isRequired
};

export default Section;
