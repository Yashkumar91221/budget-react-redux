import React from "react";
import Button from "../UI/Button.js";

export const ButtonSaveOrCancel = () => {
  return (
    <>
      <Button color="#d5dbd3">Cancel</Button>
      <span>Or</span>
      <Button color="#83ed55">Ok</Button>
    </>
  );
};
