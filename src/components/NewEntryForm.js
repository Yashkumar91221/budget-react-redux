import React from "react";
import { ButtonSaveOrCancel } from "./ButtonSaveOrCancel";

export const NewEntryForm = () => {
  return (
    <form>
      <label htmlFor="description">
        Description:
        <input
          id="description"
          name="description"
          type="text"
          placeholder="Please enter transaction"
        ></input>
      </label>
      {"    "}
      <label htmlFor="amount">
        Rs.
        <input
          id="amount"
          name="amount"
          type="number"
          min="1"
          placeholder="Please enter amount"
        ></input>
      </label>
      <ButtonSaveOrCancel />
    </form>
  );
};
