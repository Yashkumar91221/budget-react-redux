import React from "react";

export const MainHeader = ({ title, type = "large" }) => {
  return (
    <>
      {type === "large" ? (
        <h1>{title}</h1>
      ) : type === "medium" ? (
        <h2>{title}</h2>
      ) : (
        <h3>{title}</h3>
      )}
    </>
  );
};
