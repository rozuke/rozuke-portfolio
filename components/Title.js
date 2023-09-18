import React from "react";

const Title = ({ title }) => {
  return (
    <p className="text-gradient-primary-to-secondary text-4xl font-bold inline uppercase">
      {title}
    </p>
  );
};

export default Title;
