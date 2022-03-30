import React from "react";
import Button from "../UI/Button.js";

export const ButtonSaveOrCancel = ({ onClickOk, onClickCancel }) => {
  return (
    <>
      <Button color="#d5dbd3" onClick={onClickCancel}>
        Cancel
      </Button>
      <span>Or</span>
      <Button color="#83ed55" onClick={onClickOk}>
        Ok
      </Button>
    </>
  );
};
